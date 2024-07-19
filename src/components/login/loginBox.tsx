import { sendRequest } from "@/common/hooks/network/senRequestHook";
import { ErrorToastNames, showErrorToast } from "@/common/utils/toast";
import axios from "axios";
import { signIn } from "next-auth/react";
import router, { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

export interface ILoginBox {
  selectedBtn: string;
}

const LoginBox = ({ selectedBtn }: ILoginBox) => {

  const router = useRouter();
  const query = router.query;
  const queryEmail = query.email ? query.email : null;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [verifyEmailModalIsOpen, setVerifyEmailModalIsOpen] = useState(false);

  const [emailVerificationData, setEmailVerificationData] = useState({
    email: queryEmail ? queryEmail : email,
    isEmailVerified: false,
    emailVerificationCode: '',
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
  ];

  const handleInputChange = (
    key: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (key === "email") setEmail(event.target.value);
    if (key === "password") setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);

    setEmailError("");
    setPasswordError("");

    const isValidEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (selectedBtn === 'register') {
      if (!email) {
        setEmailError('Por favor, insira seu email para cadastrar uma conta.');
      } else if (!isValidEmailFormat) {
        setEmailError(
          'O e-mail inserido não tem o formato de um e-mail válido.'
        );
      }
      if (!password) {
        setPasswordError(
          'Por favor, insira uma senha para cadastrar sua conta.'
        );
      } else if (password.length <= 5) {
        setPasswordError('A senha precisa ter pelo menos 6 caracteres.');
      }
      if (confirmPassword === '') {
        setConfirmPasswordError(
          'Por favor, insira a confirmação de senha.'
        );
      }
      if (!confirmPassword) {
        setConfirmPasswordError(
          'Por favor, insira a confirmação de senha.'
        );
      } else if (password !== confirmPassword) {
        setConfirmPasswordError(
          'A confirmação de senha precisa ser igual a senha.'
        );
      }
    } else {
      if (!email) {
        setEmailError("Por favor, insira seu email para cadastrar uma conta.");
      } else if (!isValidEmailFormat) {
        setEmailError("O e-mail inserido não tem o formato de um e-mail válido.");
      }
      if (!password) {
        setPasswordError("Por favor, insira uma senha para cadastrar sua conta.");
      }
  
      if (email && password) {
        try {
          setLoading(true);
        } catch (error) {
          setLoading(false);
        }
      }
    }

    if (selectedBtn === 'register') {
      if (
        email &&
        isValidEmailFormat &&
        password &&
        password.length >= 6 &&
        confirmPassword === password
      ) {
        try {
          setLoading(true);
          const { data: responseData } = await axios.post(`${baseUrl}/user/find-by-email`, { email });

          if (responseData && !responseData.isEmailVerified && !verifyEmailModalIsOpen) {
            setVerifyEmailModalIsOpen(true);
            showErrorToast(ErrorToastNames.EmailNotVerified);
            return
          } else if (responseData && responseData.isEmailVerified) {
            showErrorToast(ErrorToastNames.EmailAlreadyInUse)
          }
        } catch (error: unknown) {
          console.error(error);
          if (axios.isAxiosError(error)) {
            if (error.response) {
              const data: any = await sendRequest(
                `${baseUrl}/auth/register`,
                'POST',
                {
                  email,
                  password,
                  confirmPassword,
                }
              );

              if (data) {
                if (!data.isEmailVerified) {
                  setVerifyEmailModalIsOpen(true)
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
                showErrorToast(ErrorToastNames.EmailAlreadyInUse)
                setLoading(false)
              }
            }
          } else {
            showErrorToast(ErrorToastNames.ServerConnection)
          }
        }
      } else {
        showErrorToast(ErrorToastNames.InvalidRegisterData)
        setLoading(false)
      }
    } else {
      if (email && password) {
        try {
          setLoading(true)
          const data = await sendRequest(
            `${baseUrl}/user/find-by-email`,
            'POST',
            { email }
          );

          if (data) {
            const isEmailVerified = data.isEmailVerified;
            if (isEmailVerified) {
              try {
                const signInResponse = await signIn('credentials', {
                  email,
                  password,
                  redirect: false,
                }).then(({ ok }: any) => {
                  if (ok) {
                    toast.dismiss();
                    router.push('/admin?page=1');
                  } else {
                    toast.dismiss();
                    showErrorToast(ErrorToastNames.UserNotFound);
                    setLoading(false);
                  }
                });

                if (signInResponse === null) {
                  setLoading(false);
                  showErrorToast(ErrorToastNames.UserNotFound)
                }
              } catch (error) {
                toast.dismiss();
                setLoading(false)
                showErrorToast(ErrorToastNames.ServerConnection);
              }
            } else {
              showErrorToast(ErrorToastNames.EmailNotVerified);
              setVerifyEmailModalIsOpen(true);
              setLoading(false);
            }
          } else {
            showErrorToast(ErrorToastNames.UserNotFound)
            setLoading(false);
          }
        } catch (error) {
          toast.dismiss();
          setLoading(false);
          showErrorToast(ErrorToastNames.ServerConnection);
        }
      } else {
        showErrorToast(ErrorToastNames.EmptyFields);
        setLoading(false)
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-10 w-full">
      {selectedBtn && selectedBtn === "login" ? (
        inputs.map((e) => (
          <div key={e.key} className="w-full">
            <input
              placeholder={e.placeholder}
              value={e.value}
              className="border p-2 h-9 text-quaternary w-full"
              type={e.type}
              onChange={(event) => handleInputChange(e.key, event)}
            />
            {e.key === "email" && emailError !== "" && (
              <span className="text-sm text-red-500">{emailError}</span>
            )}
            {e.key === "password" && passwordError !== "" && (
              <span className="text-sm text-red-500">{passwordError}</span>
            )}
          </div>
        ))
      ) : (
        <>
          {inputs.map((e) => (
            <div key={e.key} className="w-full">
              <input
                placeholder={e.placeholder}
                value={e.value}
                className="border p-2 h-9 text-quaternary w-full"
                type={e.type}
                onChange={(event) => handleInputChange(e.key, event)}
              />
              {e.key === "email" && emailError !== "" && (
                <span className="text-sm text-red-500">{emailError}</span>
              )}
              {e.key === "password" && passwordError !== "" && (
                <span className="text-sm text-red-500">{passwordError}</span>
              )}
            </div>
          ))}
          <input
            placeholder={"Confirmação da senha..."}
            value={confirmPassword}
            className="border p-2 h-9 text-quaternary w-full"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {selectedBtn === "register" && confirmPasswordError !== "" && (
            <span className="text-sm text-red-500">{confirmPasswordError}</span>
          )}
        </>
      )}

      <button
        className="rounded-xl bg-primary font-bold p-2 hover:bg-secondary transition-colors duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
        onClick={handleSubmit}
      >
        Entrar
      </button>
      <a className="text-sm font-thin text-center hover:text-red-200 transition-colors duration-200 cursor-pointer">
        Esqueceu a senha?
      </a>
    </div>
  );
};

export default LoginBox;