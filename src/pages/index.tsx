import LoginBox from "@/components/login/loginBox";
import SelectLoginMode from "@/components/login/selectLoginMode";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Login = () => {
  const [selectedBtn, setSelectedBtn] = useState({
    login: false,
    register: false
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const btn = [
    {
      key: "register",
      label: "Se cadastrar",
    },
    {
      key: "login",
      label: "Login",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center md:gap-5 gap-2 md:border w-full md:w-1/4 mx-auto my-5 md:mt-20 mt-0 px-5">
        <div>
          <Image
            src={"/underappz-logo-2.png"}
            alt={""}
            width={500}
            height={500}
          />
        </div>
        {!Object.values(selectedBtn).some((e) => e === true) ? (
          <SelectLoginMode/>
        ) : (
          <LoginBox selectedBtn={Object.values(selectedBtn).some((e) => e === true) && selectedBtn.register ? 'register' : 'login'}/>
        )}
      </div>

      <div className="flex justify-around items-center gap-5 md:border md:w-1/4 w-full mx-auto my-5 p-5">

        {btn.map((e) => (
          <button
            key={e.key}
            className="font-semibold text-primary hover:text-red-300 transition-colors duration-300"
            onClick={() => setSelectedBtn({...selectedBtn, [e.key]: true})}
          >
            {e.label}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = (await getSession(context)) as any;

  if (!session) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: "/feed",
      permanent: false,
    },
  };
};
