import Image from "next/image";
import { useState } from "react";

const Register = () => {

  const [registerFormData, setRegisterFormData] = useState({
    email: '',
    name: '',
    userName: '',
    password: ''
  })

  const inputOnChange = (e: string, input: string) => {
    setRegisterFormData((prevFormData) => ({
      ...prevFormData,
      [input]: e,
    }))
  }

  const inputs = [
    {
      input: 'email',
      placeholder: 'E-mail...',
      key: 'email',
    },
    {
      input: 'name',
      placeholder: 'Nome...',
      key: 'name',
    },
    {
      input: 'userName',
      placeholder: 'Nome de usuário...',
      key: 'userName',
    },
    {
      input: 'password',
      placeholder: 'Senha...',
      key: 'password',
    },
  ]

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 border w-1/4 mx-auto my-5 mt-5">
        <div>
          <Image 
            src={"/logo.png"} 
            alt={""}
            width={500}
            height={500}
          />
        </div>
        <p className="px-2 flex justify-center text-center">Cadastre-se para compartilhar e acompanhar a produção artística de seus amigos.</p>
        <div className="flex flex-col gap-2 mb-10 w-full px-10">

          {inputs.map((input) => (
            <input
              key={input.key}
              className="border p-2 h-9"
              placeholder={input.placeholder}
              onChange={(e) => inputOnChange(e.target.value, input.input)}
            />
          ))}

          <button
            className="rounded-xl bg-primary font-bold p-2 hover:bg-secondary transition-colors duration-200 cursor-pointer transform hover:scale-105 active:scale-95"
          >
            Cadastre-se
          </button>
        </div>

        
      </div>
      <div className="flex justify-around items-center gap-5 border w-1/4 mx-auto my-5 p-5">
        <p className="text-sm">Já tem uma conta cadstrada?</p>
        <a className="cursor-pointer font-semibold text-primary hover:text-red-300 transition-colors duration-300">Conecte-se!</a>
      </div>
    </div>
  )
}

export default Register;