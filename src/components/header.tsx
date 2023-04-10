import Image from "next/image"
import HeartIcon from "./icons/heartIcon"
import MessageBalloonIcon from "./icons/messageBalloonIcon"
import Link from "next/link"


const Header = () => {
  return (
    <nav>
      <div className="flex justify-between p-2">
        <Link href={"/"}>
          <Image 
            src={"/logo.png"} 
            alt={""}
            width={100}
            height={100}
          />
        </Link>
        <div className="flex gap-5 my-auto">
          <div>
            <Link href={"/notifications"}>
              <HeartIcon
                width="25"
                fill="#E92B2B"
              />
            </Link>
          </div>
          <div>
            <MessageBalloonIcon
              width="25"
              fill="#E92B2B"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header