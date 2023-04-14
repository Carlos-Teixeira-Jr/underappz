import CloseIcon from "./icons/closeIcon"
import ConfigIcon from "./icons/configIcon"
import NextIcon from "./icons/nextIcon"
import SaveIcon from "./icons/saveIcon"


const SidebarConfig = () =>{
  return (
    <div className="bg-black">
      <div className="p-5">
        <h1 className="text-2xl mb-5">Opções</h1>
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
      <hr className="w-4/5"/>
      <p className="p-5 text-2xl">Sair</p>
    </div>
  )
}

export default SidebarConfig