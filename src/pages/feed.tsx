// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Login = () => {

//   const [changeAccount, setChangeAccount] = useState(false);
//   const [isMobile, setIsMobile] = useState(false)


//   useEffect(() => {
//     function handleResize(){
//       setIsMobile(window.innerWidth < 768);
//     }
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [])

//   return (
//     <div>
//       <div 
//         className="flex flex-col justify-center items-center md:gap-5 gap-2 md:border w-full md:w-1/4 mx-auto my-5 md:mt-20 mt-0 px-5"
//       >
//         <div>
//           <Image 
//             src={"/underappz-logo-2.png"} 
//             alt={""}
//             width={500}
//             height={500}
//           />
//         </div>
//         {!changeAccount ? (
//           <>
//             <div className="flex flex-col items-center">
//               <p className="text-center text-sm">Faça login em uma das suas contas abaixo:</p>
//             </div>
//             <hr className="md:w-1/4 w-4/5"/>
//             <div>
//               Contas
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col gap-2 mb-10 w-full px-10">
//             <input
//               className="border p-2 h-9"
//               placeholder="E-mail"
//             />
//             <input
//               className="border p-2 h-9"
//               placeholder="Senha"
//             />
//             <button
//               className="rounded-xl bg-primary font-bold p-2 hover:bg-secondary transition-colors duration-200 cursor-pointer transform hover:scale-105 active:scale-95"
//             >
//               Entrar
//             </button>
//             <a 
//               className="text-sm font-thin text-center mt-5 hover:text-red-200 transition-colors duration-200 cursor-pointer"
//             >
//               Esqueceu a senha?
//             </a>
//           </div>
//         )}
        
//       </div>

//       <div className="flex justify-around items-center gap-5 md:border md:w-1/4 w-full mx-auto my-5 p-5">
//         {!changeAccount ? (
//           <>
//             <p 
//               className="cursor-pointer font-semibold text-primary hover:text-red-300 transition-colors duration-300"
//               onClick={() => setChangeAccount(!changeAccount)}
//             >
//               Trocar de conta
//             </p>
//             <p>ou</p>
//             <a href="/register" className="cursor-pointer font-semibold text-primary hover:text-red-300 transition-colors duration-300 text-right">
//               Se cadastrar
//             </a>
//           </>
//         ) : (
//           <>
//             <p className="text-sm">Não tem uma conta ainda?</p>
//             <a href="/register" className="cursor-pointer font-semibold text-primary hover:text-red-300 transition-colors duration-300">
//               Cadastre-se.
//             </a>
//           </>
//         )}
        
//       </div>
//     </div>
//   )
// }

// export default Login;

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import FavCaroussel from '@/components/favCarroussel'
import PostCard from '@/components/postCard'
import Menu from '@/components/menu'
import DesktopMenu from '@/components/desktopMenu'
import { useEffect, useState } from 'react'
import CommentsSection, { IComment } from '@/components/commentsSection'

export async function getStaticProps() {
  const posts = await fetch('https://raw.githubusercontent.com/Carlos-Teixeira-Jr/underappz/main/data/postData.json')
    .then((res) => res.json())
    .catch(() => ({}));

  return {
    props: {
      posts,
    },
  };
}

export interface IPost {
  photoUrl: string
  description: string
  user: string
  location: string
  comments: IComment[]
  id: number
  idx: number
}

const Home = ({ posts }: { posts: IPost[] }) => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize(){
      setIsMobile(window.innerWidth <768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  
  return (
    <main className="max-w-[1536px] lg:flex">

      {!isMobile && (
        <DesktopMenu/>
      )}
      
      <div 
        className={`${
          isMobile ?
          '' :
          'ml-[280px]'
        }`}
      >
        {isMobile && (
          <Header/>
        )}

        <FavCaroussel/>
        
        {posts.map(
          ({
            photoUrl,
            description,
            user,
            location,
            comments,
            id,
            idx
          }: IPost) =>(
            <div key={idx}>
              <PostCard
                imgUrl={photoUrl}
                alt={""}
                userName={user}
                location={location}
                description={description} 
              />
              <CommentsSection 
                userName={user}
                description={description}
                comments={comments}
                id={id}
              />
            </div>
          )
        )}
        


        {isMobile && (
          <Menu/>
        )}
      </div>
    </main>
  )
};

export default Home