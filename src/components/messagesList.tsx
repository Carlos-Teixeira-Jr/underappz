import Link from "next/link"
import ArrowLeftIcon from "./icons/arrowLeftIcon"
import SearchIcon from "./icons/searchIcon"
import Image from "next/image"


const MessagesList = () => {
  return (
    <div className="mx-4 my-2">
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
            Mensagens
          </h1>
        </div>
        <div className="my-auto">
          <p className="text-quinary font-thin">Outra coisa</p>
        </div>
      </div>
      <div>
        <div className="bg-quaternary rounded-lg p-2 flex gap-2">
          <SearchIcon
            width="30"
            height="30"
          />
          <p className="my-auto">Pesquisar...</p>
        </div>
      </div>

      <div>
        <h2>Novo</h2>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div>
              <Image 
                src={"/PSX_20200307_104707.jpg"} 
                alt={""}
                width={40}
                height={40}
                className="rounded-full border-[3px] border-red-800"
              />
            </div>
            <div>
              <div className="my-auto">
                <p className="font-extrabold">nome</p>
              </div>
              <div className="flex gap-2">
                <div className="font-thin">
                  ação realizada
                </div>
                <div className="my-auto">
                  <p className="text-sm text-gray-600">25 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-auto">
            <Image 
              src={"/PSX_20200307_104707.jpg"} 
              alt={""}
              width={40}
              height={40}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesList