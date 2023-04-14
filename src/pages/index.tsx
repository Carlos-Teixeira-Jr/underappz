import { Inter } from 'next/font/google'
import Header from '@/components/header'
import FavCaroussel from '@/components/favCarroussel'
import PostCard from '@/components/postCard'
import Menu from '@/components/menu'
import DesktopMenu from '@/components/desktopMenu'
import { useEffect, useState } from 'react'

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

const inter = Inter({ subsets: ['latin'] })

const Home = ({ posts }: any) => {

console.log("🚀 ~ file: index.tsx:24 ~ Home ~ posts:", posts)

  

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
        
        {/* {posts.map(
          ({
            imgUrl,
            description
          }: any) =>(
            <PostCard 
              imgUrl={imgUrl} 
              alt={description}
            />
          )
        )} */}
        


        {isMobile && (
          <Menu/>
        )}
      </div>
    </main>
  )
};

export default Home

