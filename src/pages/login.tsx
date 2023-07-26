import Image from "next/image";
import { useState } from "react";

const Login = () => {

  const [changeAccount, setChangeAccount] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 border md:w-1/4 w-4/5 mx-auto my-5 md:mt-20 px-5">
        <div>
          <Image 
            src={"/logo.png"} 
            alt={""}
            width={500}
            height={500}
          />
        </div>
        {!changeAccount ? (
          <>
            <div className="flex flex-col items-center">
              <p className="text-center text-sm">Faça login em uma das suas contas abaixo:</p>
            </div>
            <hr className="w-1/4"/>
            <div>
              Contas
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-2 mb-10 w-full px-10">
            <input
              className="border p-2 h-9"
              placeholder="E-mail"
            />
            <input
              className="border p-2 h-9"
              placeholder="Senha"
            />
            <button
              className="rounded-xl bg-primary font-bold p-2 hover:bg-secondary transition-colors duration-200 cursor-pointer transform hover:scale-105 active:scale-95"
            >
              Entrar
            </button>
            <a 
              className="text-sm font-thin text-center mt-5 hover:text-red-200 transition-colors duration-200 cursor-pointer"
            >
              Esqueceu a senha?
            </a>
          </div>
        )}
        
      </div>

      <div className="flex justify-around items-center gap-5 border md:w-1/4 w-4/5 mx-auto my-5 p-5">
        {!changeAccount ? (
          <>
            <p 
              className="cursor-pointer font-semibold text-primary hover:text-red-300 transition-colors duration-300"
              onClick={() => setChangeAccount(!changeAccount)}
            >
              Trocar de conta
            </p>
            <p>ou</p>
            <a href="/register" className="cursor-pointer font-semibold text-primary hover:text-red-300 transition-colors duration-300 text-right">
              Se cadastrar
            </a>
          </>
        ) : (
          <>
            <p className="text-sm">Não tem uma conta ainda?</p>
            <a href="/register" className="cursor-pointer font-semibold text-primary hover:text-red-300 transition-colors duration-300">
              Cadastre-se.
            </a>
          </>
        )}
        
      </div>
    </div>
  )
}

export default Login;