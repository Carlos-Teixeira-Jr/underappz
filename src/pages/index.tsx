import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import FavCaroussel from '@/components/favCarroussel'
import PostCard from '@/components/postCard'
import Menu from '@/components/menu'
import { useMediaQuery } from 'react-responsive'
import DesktopMenu from '@/components/desktopMenu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const isMobile = useMediaQuery({ query: `(max-width: 400)` })

  return (
    <main className="max-w-[1536px] lg:flex">

      {!isMobile && (
        <DesktopMenu/>
      )}
      
      <div>
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
