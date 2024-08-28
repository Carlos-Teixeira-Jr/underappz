import Image from "next/image";
import Link from "next/link";
import SearchIcon from "./icons/searchIcon";
import MusicIcon from "./icons/musicIcons";
import VideoIcon from "./icons/videoIcon";
import ImageIcon from "./icons/imageIcons";
import EventIcon from "./icons/eventIcon";
import MessageBalloonIcon from "./icons/messageBalloonIcon";
import NoteIcon from "./icons/noteIcon";
import ProfileIcon from "./icons/profileIcon";
import MoreIcon from "./icons/moreIcon";
import SidebarSearch from "./sideBarSearch";
import { useState } from "react";
import SidebarNotifications from "./SidebarNotifications";
import TextIcon from "./icons/textIcon";
import SidebarConfig from "./sidebarConfig";
import { useRouter } from "next/router";

const DesktopMenu = () => {
  const [sidebarOptionIsOpen, setSidebarOptionIsOpen] = useState("");
  const iconWidth = '30px';
  const { push } = useRouter();

  const menuOption = [
    {
      key: "search",
      icon: <SearchIcon width={iconWidth}/>,
      label: "Pesquisa",
    },
    {
      key: "music",
      icon: <MusicIcon  width={iconWidth}/>,
      label: "Música",
    },
    {
      key: "video",
      icon: <VideoIcon  width={iconWidth}/>,
      label: "Vídeo",
    },
    {
      key: "image",
      icon: <ImageIcon  width={iconWidth}/>,
      label: "Imagem",
    },
    {
      key: "text",
      icon: <TextIcon  width={iconWidth}/>,
      label: "Texto",
    },
    {
      key: "events",
      icon: <EventIcon  width={iconWidth}/>,
      label: "Eventos",
    },
    {
      key: "equip",
      icon: <MusicIcon  width={iconWidth}/>,
      label: "Equipamentos",
    },
    {
      key: "messages",
      icon: <MessageBalloonIcon  width={iconWidth}/>,
      label: "Mensagens",
    },
    {
      key: "notifications",
      icon: <NoteIcon  width={iconWidth}/>,
      label: "Notificações",
    },
    {
      key: "profile",
      icon: <ProfileIcon  width={iconWidth}/>,
      label: "Perfil",
    },
    {
      key: "more",
      icon: <MoreIcon  width={iconWidth}/>,
      label: "Mais",
    },
  ];

  const handleMenuOptionClick = (id: string) => {
    if (sidebarOptionIsOpen === id) {
      setSidebarOptionIsOpen("");

      if (id === 'text') push('/textMosaic')
    } else {
      setSidebarOptionIsOpen(id);
    }
  };

  return (
    <div className="flex fixed md:static">
      <div className=" bg-black pr-16">
        <div>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt={""} width={200} height={200} />
          </Link>
        </div>

        {menuOption.map((option) => (
          <div>
            <div
              className="flex px-4 gap-4 cursor-pointer"
              onClick={() => handleMenuOptionClick(option.key)}
            >
              {option.icon}
              <p className="text-base font-thin my-auto">{option.label}</p>
            </div>
          </div>
        ))}

      </div>

      {sidebarOptionIsOpen === "search" && <SidebarSearch />}

      {sidebarOptionIsOpen === "note" && <SidebarNotifications />}

      {sidebarOptionIsOpen === "more" && <SidebarConfig />}
    </div>
  );
};

export default DesktopMenu;
