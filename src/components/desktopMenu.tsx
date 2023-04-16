import Image from "next/image"
import Link from "next/link"
import SearchIcon from "./icons/searchIcon"
import MusicIcon from "./icons/musicIcons"
import VideoIcon from "./icons/videoIcon"
import ImageIcon from "./icons/imageIcons"
import EventIcon from "./icons/eventIcon"
import MessageBalloonIcon from "./icons/messageBalloonIcon"
import NoteIcon from "./icons/noteIcon"
import ProfileIcon from "./icons/profileIcon"
import MoreIcon from "./icons/moreIcon"
import SidebarSearch from "./sideBarSearch"
import { useState } from "react"
import SidebarNotifications from "./SidebarNotifications"
import TextIcon from "./icons/textIcon"
import SidebarConfig from "./sidebarConfig"


const DesktopMenu = () => {

  const [sidebarOptionIsOpen, setSidebarOptionIsOpen] = useState("");

  const handleMenuOptionClick = (id: string) => {
    if(sidebarOptionIsOpen === id){
      setSidebarOptionIsOpen("");
    }else{
      setSidebarOptionIsOpen(id)
    }
  }
  
  return (
    <div className="flex fixed">
      <div className=" bg-black pr-16">
        <div>
          <Link href={"/"}>
            <Image 
              src={"/logo.png"} 
              alt={""}
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div>
          <div 
            className="flex px-4 gap-4 cursor-pointer"
            onClick={() => handleMenuOptionClick("search")}
          >
            <SearchIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Pesquisa</p>
          </div>
        </div>
        <div>
          <Link href={"/music"}>
            <div className="flex px-4 gap-4 cursor-pointer">
              <MusicIcon
                width="35"
              />
              <p className="text-lg font-thin my-auto">Música</p>
            </div>
          </Link>
        </div>
        <div>
          <div className="flex px-4 gap-4 cursor-pointer">
            <VideoIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Vídeo</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4 cursor-pointer">
            <ImageIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Imagem</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4 cursor-pointer">
            <TextIcon
              width="35"
            />
            <p 
              className="text-lg font-thin my-auto"
              onClick={() => handleMenuOptionClick("text")}
            >Criar</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4 cursor-pointer">
            <EventIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Eventos</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4 cursor-pointer">
            <MusicIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Equipamentos</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4 cursor-pointer">
            <MessageBalloonIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Mensagens</p>
          </div>
        </div>
        <div>
          <div 
            className="flex px-4 gap-4 cursor-pointer"
            onClick={() => handleMenuOptionClick("note")}
          >
            <NoteIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto cursor-pointer">Notificações</p>
          </div>
        </div>
        
        <div>
          <div className="flex px-4 gap-4 cursor-pointer">
            <ProfileIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Perfil</p>
          </div>
        </div>
        <div>
          <div 
            className="flex px-4 gap-4 cursor-pointer"
            onClick={() => handleMenuOptionClick("more")}
          >
            <MoreIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Mais</p>
          </div>
        </div>
      </div>

      {sidebarOptionIsOpen === "search" && (
        <SidebarSearch/>
      )}

      {sidebarOptionIsOpen === "note" && (
        <SidebarNotifications/>
      )}

      {sidebarOptionIsOpen === "more" && (
        <SidebarConfig/>
      )}
      
    </div>
  )
}

export default DesktopMenu