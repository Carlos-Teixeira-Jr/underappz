import Image from "next/image"
import Link from "next/link"
import SearchIcon from "./icons/searchIcon"
import MusicIcon from "./icons/musicIcons"
import VideoIcon from "./icons/videoIcon"
import ImageIcon from "./icons/imageIcons"
import EventIcon from "./icons/eventIcon"
import MessageBalloonIcon from "./icons/messageBalloonIcon"
import NoteIcon from "./icons/noteIcon"
import CreativeIcon from "./icons/textIcon"
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
          <div className="flex px-4 gap-4">
            <MusicIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Música</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4">
            <VideoIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Vídeo</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4">
            <ImageIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Imagem</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4">
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
          <div className="flex px-4 gap-4">
            <EventIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Eventos</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4">
            <MusicIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Equipamentos</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4">
            <MessageBalloonIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Mensagens</p>
          </div>
        </div>
        <div>
          <div 
            className="flex px-4 gap-4"
            onClick={() => handleMenuOptionClick("note")}
          >
            <NoteIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Notificações</p>
          </div>
        </div>
        
        <div>
          <div className="flex px-4 gap-4">
            <ProfileIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Perfil</p>
          </div>
        </div>
        <div>
          <div 
            className="flex px-4 gap-4"
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