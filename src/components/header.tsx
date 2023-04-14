import Image from "next/image"
import HeartIcon from "./icons/heartIcon"
import MessageBalloonIcon from "./icons/messageBalloonIcon"
import Link from "next/link"


const Header = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <Link href={"/"}>
          <Image 
            src={"/logo.png"} 
            alt={""}
            width={100}
            height={100}
          />
        </Link>
        <div className="flex gap-8 my-auto bg-primary py-2 px-8 rounded-bl-3xl">
          <div>
            <Link href={"/notifications"}>
              <HeartIcon
                width="25"
                fill="#F5F6FA"
              />
            </Link>
          </div>
          <div>
            <Link href={"/messages"}>
              <MessageBalloonIcon
                width="25"
                fill="#F5F6FA"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header