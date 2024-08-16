import Image from "next/image";
import HeartIcon from "./icons/heartIcon";
import MessageBalloonIcon from "./icons/messageBalloonIcon";
import Link from "next/link";
import { signOut } from "next-auth/react";
import LogoutIcon from "./icons/logoutIcon";

const Header = () => {
  const options = [
    {
      key: 1,
      link: "/notifications",
      icon: <HeartIcon width="25" className="cursor-pointer" fill="#F5F6FA" />,
    },
    {
      key: 2,
      link: "/messages",
      icon: <MessageBalloonIcon width="25" className="cursor-pointer" fill="#F5F6FA" />,
    },
    {
      key: 3,
      link: "",
      icon: <LogoutIcon width="25" className="cursor-pointer" fill="#F5F6FA" onClick={() => signOut()}/>,
    },
  ];

  return (
    <nav>
      <div className="flex justify-between">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt={""} width={100} height={100} />
        </Link>
        <div className="flex gap-8 my-auto bg-primary py-2 px-8 rounded-bl-3xl">
          {options.map((opt) => (
            <div key={opt.key}>
              <Link href={opt.link}>
                {opt.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
