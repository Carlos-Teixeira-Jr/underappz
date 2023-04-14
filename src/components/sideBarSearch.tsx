import Image from "next/image"
import CloseIcon from "./icons/closeIcon"


const SidebarSearch = () => {
  return (
    <div className="bg-black">
      <div className="p-5">
        <h1 className="text-2xl">Pesquisa</h1>
        <div className="bg-gray-600 rounded-md p-2 w-full my-5 flex gap-36 font-thin text-gray-900">
          <p>Pesquisar</p>
          <p>X</p>
        </div>
        <hr className="w-full"/>
      </div>

      <div className="px-5 space-y-2">
        <div className="flex justify-between text-md">
          <p>Recentes</p>
          <p>Limpar tudo</p>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-sm">
              c
              <div className="flex flex-col">
                <p>Nickname</p>
                <div className="flex gap-2 font-thin text-xs">
                  <p>Nome</p>
                  <p>-</p>
                  <p>Seguindo</p>
                </div>
              </div>
            </div>
            <CloseIcon
              width="25"
              height="25"
              className="my-auto"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SidebarSearch