import DesktopMenu from "@/components/desktopMenu";
import FavCaroussel from "@/components/favCarroussel";
import Header from "@/components/header";
import ArrowLeftIcon from "@/components/icons/arrowLeftIcon";
import Menu from "@/components/menu";
import MusicComponent from "@/components/musicComponent";
import Link from "next/link";
import { useEffect, useState } from "react";


const MusicPage = () =>{

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

      <div className="flex justify-between">
        <div>
          <Link href={"/"}>
            <ArrowLeftIcon
              width="30"
              fill="#F5F6FA"
            />
          </Link>
        </div>
        <div className="my-auto">
          <h1 className="text-quinary text-xl font-semibold">
            Música
          </h1>
        </div>
        <div className="my-auto">
          <p className="text-quinary font-thin">Outra coisa</p>
        </div>
      </div>

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
          <Menu/>
        )}

        <MusicComponent/>
      </div>
    </main>
  )
}

export default MusicPage