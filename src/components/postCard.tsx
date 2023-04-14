import Image from "next/image"
import HeartIcon from "./icons/heartIcon"
import MessageBalloonIcon from "./icons/messageBalloonIcon"
import ShareIcon from "./icons/shareIcon"
import SaveIcon from "./icons/saveIcon"
import MoreIcon from "./icons/moreIcon"

export interface IPostCard{
  imgUrl: string,
  alt: string,
  name: string
}

const PostCard = ({imgUrl, alt, name}: IPostCard) => {
  return (
    <div className="w-full">
      

      <div>
        <Image 
          src={imgUrl} 
          alt={alt}
          width={400}
          height={400}
          className="w-full"
        />
      </div>

      <div className="flex justify-between bg-quaternary rounded-full m-2">
        <div className="flex">
          <div className="p-2 w-fit">
            <Image 
              src={"/PSX_20200307_104707.jpg"} 
              alt={""}
              width={40}
              height={40}
              className="rounded-full border-[3px] border-primary"
            />
          </div>
          <div className="my-auto">
            <p className="font-bold text-quinary">{name}</p>
            <p className="text-quinary text-xs">Localização</p>
          </div>
        </div>
        <div className="px-4 my-auto">
          <MoreIcon/>
        </div>
      </div>

      <div className="flex justify-between px-4">
        <div className="flex gap-4">
          <div>
            <HeartIcon
              width="25"
            />
          </div>
          <div>
            <MessageBalloonIcon
              width="25"
            />
          </div>
          <div>
            <ShareIcon
              width="28"
            />
          </div>
        </div>
        <div>
          <SaveIcon
            width="28"
          />
        </div>
      </div>

      <div className="flex flex-col px-2 gap-2 bg-quaternary">
        <div className="flex gap-2">
          <div className="font-bold text-quinary">
            Nome
          </div>
          <div>
            <p className=" text-quinary">Coment´\rio endebhn dceybddsja becued jceucu</p>
          </div>
        </div>
        <div className="text-quaternary mb-2">
          Ver todos os 8 comentários
        </div>
      </div>

      <div className="mb-2">
        <div className="flex gap-2 px-2">
          <div className="my-auto">
            <Image 
              src={"/PSX_20200307_104707.jpg"} 
              alt={""}
              width={25}
              height={25}
              className="rounded-full"
            />
          </div>
          <div className="py-2">
            <p className=" text-quinary">Adicione um comentário</p>
          </div>
          
        </div>
        <p className="text-sm text-gray-500 px-2">Há 6 horas atrás</p>
      </div>
    </div>
  )
}
export default PostCard