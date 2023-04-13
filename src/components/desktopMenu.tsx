import Image from "next/image"
import Link from "next/link"
import SearchIcon from "./icons/searchIcon"
import MusicIcon from "./icons/musicIcons"
import VideoIcon from "./icons/videoIcon"
import ImageIcon from "./icons/imageIcons"
import EventIcon from "./icons/eventIcon"
import MessageBalloonIcon from "./icons/messageBalloonIcon"
import NoteIcon from "./icons/noteIcon"
import CreativeIcon from "./icons/criativeIcon"
import ProfileIcon from "./icons/profileIcon"
import MoreIcon from "./icons/moreIcon"


const DesktopMenu = () => {
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
          <div className="flex px-4 gap-4">
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
          <div className="flex px-4 gap-4">
            <NoteIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Notificações</p>
          </div>
        </div>
        <div>
          <div className="flex px-4 gap-4">
            <CreativeIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Criar</p>
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
          <div className="flex px-4 gap-4">
            <MoreIcon
              width="35"
            />
            <p className="text-lg font-thin my-auto">Mais</p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="p-5">
          <h1 className="text-2xl">Pesquisa</h1>
          <div className="bg-gray-600 rounded-md p-2 w-full my-5 flex gap-36 font-thin text-gray-900">
            <p>Pesquisar</p>
            <p>X</p>
          </div>
          <hr className="w-full"/>
        </div>
        
      </div>
    </div>
  )
}

export default DesktopMenu