import { Inter } from 'next/font/google'
import Header from '@/components/header'
import FavCaroussel from '@/components/favCarroussel'
import PostCard from '@/components/postCard'
import Menu from '@/components/menu'
import DesktopMenu from '@/components/desktopMenu'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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

        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>

        {isMobile && (
          <Menu/>
        )}
      </div>
      
      
    </main>
  )
}
