import Image from "next/image"
import Link from "next/link"
import SearchIcon from "./icons/searchIcon"
import MusicIcon from "./icons/musicIcons"


const DesktopMenu = () => {
  return (
    <div>
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
          <MusicIcon
            width="35"
          />
          <p className="text-lg font-thin my-auto">Vídeo</p>
        </div>
      </div>
      <div>
        <div className="flex px-4 gap-4">
          <MusicIcon
            width="35"
          />
          <p className="text-lg font-thin my-auto">Imagem</p>
        </div>
      </div>
      <div>
        <div className="flex px-4 gap-4">
          <MusicIcon
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
          <MusicIcon
            width="35"
          />
          <p className="text-lg font-thin my-auto">Mensagens</p>
        </div>
      </div>
      <div>
        <div className="flex px-4 gap-4">
          <MusicIcon
            width="35"
          />
          <p className="text-lg font-thin my-auto">Notificações</p>
        </div>
      </div>
      <div>
        <div className="flex px-4 gap-4">
          <MusicIcon
            width="35"
          />
          <p className="text-lg font-thin my-auto">Criar</p>
        </div>
      </div>
      <div>
        <div className="flex px-4 gap-4">
          <MusicIcon
            width="35"
          />
          <p className="text-lg font-thin my-auto">Perfil</p>
        </div>
      </div>
      <div>
        <div className="flex px-4 gap-4">
          <MusicIcon
            width="35"
          />
          <p className="text-lg font-thin my-auto">Mais</p>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu