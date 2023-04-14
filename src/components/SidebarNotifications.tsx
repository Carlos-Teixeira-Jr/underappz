import Image from "next/image"


const SidebarNotifications = () => {
  return (
    <div className="bg-black">
      <div className="p-5">
        <h1 className="text-2xl">Notificações</h1>
        <h3 className="py-5">Hoje</h3>
        <div className="flex gap-2">
          <div className="flex gap-2 mr-5">
            <div>
              <Image 
                src={"/PSX_20200307_104707.jpg"} 
                alt={""}
                width={40}
                height={40}
                className="rounded-full border-[3px] border-primary"
              />
            </div>
            <div>
              <p>Nome</p>
              <p className="font-thin text-xs">curtiu sua publicação</p>
            </div>
          </div>
          <div>
            <Image 
              src={"/PSX_20200307_104707.jpg"} 
              alt={""}
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarNotifications