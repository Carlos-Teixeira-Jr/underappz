import Image from "next/image"
import HeartIcon from "./icons/heartIcon"
import MessageBalloonIcon from "./icons/messageBalloonIcon"
import ShareIcon from "./icons/shareIcon"
import SaveIcon from "./icons/saveIcon"
import MoreIcon from "./icons/moreIcon"

export interface IPostCard{
  imgUrl: string,
  alt: string,
  userName: string,
  location: string,
  description: string
}

const PostCard = ({
  imgUrl, 
  alt, 
  userName, 
  location, 
  description
}: IPostCard) => {
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

      <div className="flex justify-between bg-quaternary rounded-full mt-4">
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
            <p className="font-bold text-quinary">{userName}</p>
            <p className="text-quinary text-xs">{location}</p>
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
    </div>
  )
}
export default PostCard