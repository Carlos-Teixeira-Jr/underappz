import Image from "next/image"

const PostCard = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex">
          <div className="p-2 w-fit">
            <Image 
              src={"/PSX_20200307_104707.jpg"} 
              alt={""}
              width={40}
              height={40}
              className="rounded-full border-[3px] border-red-800"
            />
          </div>
          <div className="my-auto">
            <p className="font-bold">Nome</p>
            <p>Localização</p>
          </div>
        </div>
        <div className="p-2">
          <p>menu</p>
        </div>
      </div>

      <div>
        <Image 
          src={"/PSX_20200307_104707.jpg"} 
          alt={""}
          width={40}
          height={40}
          className="w-full"
        />
      </div>

      <div className="flex justify-between p-2">
        <div className="flex gap-2">
          <div>
            S3
          </div>
          <div>
            Msg
          </div>
          <div>
            Share
          </div>
        </div>
        <div>
          Salvar
        </div>
      </div>

      <div className="flex flex-col px-2 gap-2">
        <div className="flex gap-2">
          <div className="font-bold">
            Nome
          </div>
          <div>
            <p>Coment´\rio endebhn dceybddsja becued jceucu</p>
          </div>
        </div>
        <div className="text-gray-500">
          Ver todos os 8 comentários
        </div>
      </div>

      <div className="flex gap-2 px-2">
        <div>
          <Image 
            src={"/PSX_20200307_104707.jpg"} 
            alt={""}
            width={25}
            height={25}
            className="rounded-full"
          />
        </div>
        <div>
          <p>Adicione um comentário</p>
        </div>
      </div>
    </div>
  )
}
export default PostCard