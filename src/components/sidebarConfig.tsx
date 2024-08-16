import { signOut } from "next-auth/react"
import CloseIcon from "./icons/closeIcon"
import ConfigIcon from "./icons/configIcon"
import NextIcon from "./icons/nextIcon"
import SaveIcon from "./icons/saveIcon"


const SidebarConfig = () =>{
  return (
    <div className="bg-zinc-900 flex flex-col  p-5 h-fit absolute top-[21rem] left-[7rem] drop-shadow-xl rounded-md">
      <div className="p-5">
        <h1 className="text-xl mb-5">Opções</h1>
        <div className="flex gap-10 justify-between">
          <div className="flex gap-2 font-thin">
            <ConfigIcon
              width="25"
            />
            <p className="my-auto">Configuração</p>
          </div>
          <NextIcon
            width="20"
          />
        </div>
        <div className="flex gap-10 justify-between">
          <div className="flex gap-2 font-thin">
            <SaveIcon
              width="25"
            />
            <p className="my-auto">Salvos</p>
          </div>
          <NextIcon
            width="20"
          />
        </div>
      </div>
      <hr className="w-4/5 mx-auto"/>
      <button className="p-5 text-2xl" onClick={() => signOut()}>Sair</button>
    </div>
  )
}

export default SidebarConfig