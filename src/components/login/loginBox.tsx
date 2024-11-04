import { sendRequest } from "@/common/hooks/network/senRequestHook";
import { ErrorToastNames, showErrorToast } from "@/common/utils/toast";
import axios from "axios";
import { signIn } from "next-auth/react";
import router, { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import VerifyEmailModal from "./verifyEmailModal";
import Loading from "../icons/loadingIcon";

export interface ILoginBox {
  isLogin: boolean;
  isRegister: boolean;
}

const LoginBox = ({ isRegister, isLogin }: ILoginBox) => {
  console.log("🚀 ~ LoginBox ~ isLogin:", isLogin);
  console.log("🚀 ~ LoginBox ~ isRegister:", isRegister);
  const router = useRouter();
  const query = router.query;
  const queryEmail = query.email ? query.email : null;

  const [email, setEmail] = useState<string>("");
  console.log("🚀 ~ LoginBox ~ email:", email);
  const [password, setPassword] = useState<string>("");
  console.log("🚀 ~ LoginBox ~ password:", password);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [verifyEmailModalIsOpen, setVerifyEmailModalIsOpen] = useState(false);

  const [emailVerificationData, setEmailVerificationData] = useState({
    email: queryEmail ? queryEmail : email,
    isEmailVerified: false,
    emailVerificationCode: "",
    password: password,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [loading, setLoading] = useState(false);

  const inputs = [
    {
      key: "email",
      placeholder: "Insira seu email...",
      value: email,
      type: "email",
      label: "E-mail",
    },
    {
      key: "password",
      placeholder: "Insira sua senha...",
      value: password,
      type: "password",
      label: "Senha",
    },
    {
      key: "confirmPassword",
      placeholder: "Insira sua confirmação de senha...",
      value: confirmPassword,
      type: "password",
      label: "Confirmação de senha",
    },
  ];

  const handleInputChange = (
    key: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (key === "email") {
      setEmail(event.target.value);
      setEmailVerificationData({
        ...emailVerificationData,
        email: event.target.value,
      });
    }
    if (key === "password") {
      setPassword(event.target.value);
      setEmailVerificationData({
        ...emailVerificationData,
        password: event.target.value,
      });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    setEmailError("");
    setPasswordError("");

    const isValidEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isRegister) {
      if (!email) {
        setEmailError("Por favor, insira seu email para cadastrar uma conta.");
      } else if (!isValidEmailFormat) {
        setEmailError(
          "O e-mail inserido não tem o formato de um e-mail válido."
        );
      }
      if (!password) {
        setPasswordError(
          "Por favor, insira uma senha para cadastrar sua conta."
        );
      } else if (password.length <= 5) {
        setPasswordError("A senha precisa ter pelo menos 6 caracteres.");
      }
      if (confirmPassword === "") {
        setConfirmPasswordError("Por favor, insira a confirmação de senha.");
      }
      if (!confirmPassword) {
        setConfirmPasswordError("Por favor, insira a confirmação de senha.");
      } else if (password !== confirmPassword) {
        setConfirmPasswordError(
          "A confirmação de senha precisa ser igual a senha."
        );
      }
    } else {
      if (!email) {
        setEmailError("Por favor, insira seu email para cadastrar uma conta.");
      } else if (!isValidEmailFormat) {
        setEmailError(
          "O e-mail inserido não tem o formato de um e-mail válido."
        );
      }
      if (!password) {
        setPasswordError(
          "Por favor, insira uma senha para cadastrar sua conta."
        );
      }

      if (email && password) {
        try {
          setLoading(true);
        } catch (error) {
          setLoading(false);
        }
      }
    }

    if (isRegister) {
      if (
        email &&
        isValidEmailFormat &&
        password &&
        password.length >= 6 &&
        confirmPassword === password
      ) {
        try {
          setLoading(true);
          const { data: responseData } = await axios.post(
            `${baseUrl}/user/find-by-email`,
            { email }
          );

          if (
            responseData &&
            !responseData.isEmailVerified &&
            !verifyEmailModalIsOpen
          ) {
            setVerifyEmailModalIsOpen(true);
            showErrorToast(ErrorToastNames.EmailNotVerified);
            return;
          } else if (responseData && responseData.isEmailVerified) {
            showErrorToast(ErrorToastNames.EmailAlreadyInUse);
          }
        } catch (error: unknown) {
          console.error(error);
          if (axios.isAxiosError(error)) {
            if (error.response) {
              const data: any = await sendRequest(
                `${baseUrl}/auth/register`,
                "POST",
                {
                  email,
                  password,
                  confirmPassword,
                }
              );

              if (data) {
                if (!data.isEmailVerified) {
                  setVerifyEmailModalIsOpen(true);
                }
                const { email, emailVerificationCode, isEmailVerified } = data;
                setEmailVerificationData({
                  email,
                  isEmailVerified,
                  emailVerificationCode,
                  password,
                });
                setVerifyEmailModalIsOpen(true);
              } else {
                showErrorToast(ErrorToastNames.EmailAlreadyInUse);
                setLoading(false);
              }
            }
          } else {
            showErrorToast(ErrorToastNames.ServerConnection);
          }
        }
      } else {
        showErrorToast(ErrorToastNames.InvalidRegisterData);
        setLoading(false);
      }
    } else {
      if (email && password) {
        try {
          setLoading(true);
          const data = await sendRequest(
            `${baseUrl}/user/find-by-email`,
            "POST",
            { email }
          );

          if (data) {
            const isEmailVerified = data.isEmailVerified;
            if (isEmailVerified) {
              try {
                const signInResponse = await signIn("credentials", {
                  email,
                  password,
                  redirect: false,
                }).then(({ ok }: any) => {
                  if (ok) {
                    toast.dismiss();
                    router.push("/feed");
                  } else {
                    toast.dismiss();
                    showErrorToast(ErrorToastNames.UserNotFound);
                    setLoading(false);
                  }
                });

                if (signInResponse === null) {
                  setLoading(false);
                  showErrorToast(ErrorToastNames.UserNotFound);
                }
              } catch (error) {
                toast.dismiss();
                setLoading(false);
                showErrorToast(ErrorToastNames.ServerConnection);
              }
            } else {
              showErrorToast(ErrorToastNames.EmailNotVerified);
              setVerifyEmailModalIsOpen(true);
              setLoading(false);
            }
          } else {
            showErrorToast(ErrorToastNames.UserNotFound);
            setLoading(false);
          }
        } catch (error) {
          toast.dismiss();
          setLoading(false);
          showErrorToast(ErrorToastNames.ServerConnection);
        }
      } else {
        showErrorToast(ErrorToastNames.EmptyFields);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const inputxada = inputs.slice(0, -1).map((input) => input);
    console.log("🚀 ~ useEffect ~ inputxada:", inputxada);
  }, [inputs]);

  return (
    <div className="flex flex-col gap-2 mb-10 w-full">
      {isRegister || isLogin ? (
        inputs.slice(0, -1).map((input) => (
          <div key={input.key} className="w-full">
            <input
              placeholder={input.placeholder}
              value={input.value}
              className="border p-2 h-9 text-quaternary w-full my-1 rounded"
              type={input.type}
              onChange={(event) => handleInputChange(input.key, event)}
            />
            {input.key === "email" && emailError !== "" && (
              <span className="text-sm text-red-500">{emailError}</span>
            )}
            {input.key === "password" && passwordError !== "" && (
              <span className="text-sm text-red-500">{passwordError}</span>
            )}
          </div>
        ))
      ) : (
        <section className="flex flex-col items-center gap-5">
          <h1 className="text-center text-sm">
            Faça login em uma das suas contas abaixo:
          </h1>

          <hr className="md:w-1/4 w-4/5" />
          <div>Contas</div>
        </section>
      )}

      {isRegister && (
        <div>
          <input
            placeholder={"Confirmação da senha..."}
            value={confirmPassword}
            className="border p-2 h-9 text-quaternary w-full rounded my-1"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isRegister && confirmPasswordError !== "" && (
            <span className="text-sm text-red-500">{confirmPasswordError}</span>
          )}
        </div>
      )}

      <button
        className="rounded-xl bg-primary font-bold p-2 h-12 hover:bg-secondary transition-colors duration-300 cursor-pointer transform hover:scale-105 active:scale-95 flex justify-center items-center my-1"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <Loading /> : <span>Entrar</span>}
      </button>
      <a className="text-sm font-thin text-center hover:text-red-200 transition-colors duration-200 cursor-pointer">
        Esqueceu a senha?
      </a>

      {verifyEmailModalIsOpen && (
        <VerifyEmailModal
          isOpen={verifyEmailModalIsOpen}
          setModalIsOpen={setVerifyEmailModalIsOpen}
          emailVerificationDataProp={emailVerificationData}
        />
      )}
    </div>
  );
};

export default LoginBox;
