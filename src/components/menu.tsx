import Image from "next/image"
import HouseIcon from "./icons/houseIcon"
import SearchIcon from "./icons/searchIcon"
import PlusIcon from "./icons/plusIcon"
import ContentIcon from "./icons/contentIcon"
import HomeIcon from "./icons/homeIcon"
import { useEffect, useState } from "react"
import Link from "next/link"


const Menu = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize(){
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className="fixed bottom-0 px-5 w-full bg-primary drop-shadow-lg">

      {menuIsOpen && (
        <div className="bg-primary text-center text-3xl py-10 space-y-10">
          <p>Música</p>
          <p>Vídeo</p>
          <p>Imagem</p>
          <p>Eventos</p>
          <p>Equipamentos</p>
          <p>Mais...</p>
        </div>
      )}

      

      <div className="flex justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <HomeIcon
            fill="#FBFFFD"
            width="38"
          />
        </div>
        <div>
          <Link href={"/art-mosaic"}>
            <SearchIcon
              fill="#FBFFFD"
              width="38"
            />
          </Link>
        </div>
        <div>
          <PlusIcon
            fill="#FBFFFD"
            width="40"
          />
        </div>
        <div
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <ContentIcon
            fill="#FBFFFD"
            width="43"
          />
        </div>
        <div className="my-auto">
          <Image 
            src={"/PSX_20200307_104707.jpg"} 
            alt={""}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Menu