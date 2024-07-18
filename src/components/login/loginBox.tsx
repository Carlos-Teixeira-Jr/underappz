import { ChangeEvent, useState } from "react";

export interface ILoginBox {
  selectedBtn: string;
}

const LoginBox = ({ selectedBtn }: ILoginBox) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  console.log("🚀 ~ LoginBox ~ emailError:", emailError);
  const [passwordError, setPasswordError] = useState<string>("");

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

  const handleLogin = async () => {
    setLoading(true);

    setEmailError("");
    setPasswordError("");

    const isValidEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
  };

  return (
    <div className="flex flex-col gap-2 mb-10 w-full">
      {selectedBtn && selectedBtn === "register" ? (
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
          <button className="rounded-xl bg-primary font-bold p-2 hover:bg-secondary transition-colors duration-200 cursor-pointer transform hover:scale-105 active:scale-95">
            Entrar
          </button>
          <a className="text-sm font-thin text-center mt-5 hover:text-red-200 transition-colors duration-200 cursor-pointer">
            Esqueceu a senha?
          </a>
        </>
      )}

      <button
        className="rounded-xl bg-primary font-bold p-2 hover:bg-secondary transition-colors duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
        onClick={handleLogin}
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
