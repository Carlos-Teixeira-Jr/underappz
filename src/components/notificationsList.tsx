import Image from "next/image"
import ArrowLeftIcon from "./icons/arrowLeftIcon"


const NotificationsList = () => {
  return (
    <div className="p-2">

      <div className="flex justify-between">
        <div>
          <ArrowLeftIcon
            width="30"
            fill="#F5F6FA"
          />
        </div>
        <div className="my-auto">
          <h1 className="text-quinary text-xl font-semibold">
            Notificações
          </h1>
        </div>
        <div className="my-auto">
          <p className="text-secondary">Filtrar por</p>
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
            <div className="my-auto">
              <p className="font-extrabold">nome</p>
            </div>
            <div className="my-auto">
              ação realizada
            </div>
            <div className="my-auto">
              <p className="text-sm text-quaternary">25 min</p>
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

export default NotificationsList