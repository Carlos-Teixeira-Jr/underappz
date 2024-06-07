import { ChangeEvent, useState } from "react";

export interface ILoginBox {
  selectedBtn: string;
}

const LoginBox = ({ selectedBtn }: ILoginBox) => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  console.log("🚀 ~ LoginBox ~ loginFormData:", loginFormData)

  const inputs = [
    {
      key: "email",
      placeholder: "Insira seu email...",
      value: loginFormData.email,
      type: "email",
      label: "E-mail",
    },
    {
      key: "password",
      placeholder: "Insira sua senha...",
      value: loginFormData.password,
      type: "password",
      label: "Senha",
    },
  ];

  const handleInputChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [key]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-2 mb-10 w-full">
      {selectedBtn && selectedBtn === "register" ? (
        inputs.map((e) => (
          <input
            key={e.key}
            placeholder={e.placeholder}
            value={e.value}
            className="border p-2 h-9 text-quaternary"
            type={e.type}
            onChange={handleInputChange(e.key)}
          />
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
    </div>
  );
};

export default LoginBox;
