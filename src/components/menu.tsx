import Image from "next/image"
import HouseIcon from "./icons/houseIcon"
import SearchIcon from "./icons/searchIcon"
import PlusIcon from "./icons/plusIcon"
import ContentIcon from "./icons/contentIcon"
import HomeIcon from "./icons/homeIcon"


const Menu = () => {
  return (
    <div className="fixed bottom-0 px-5 py-2 w-full bg-primary">
      <div className="flex justify-between">
        <div>
          <HomeIcon
            fill="#FBFFFD"
            width="38"
          />
        </div>
        <div>
          <SearchIcon
            fill="#FBFFFD"
            width="38"
          />
        </div>
        <div>
          <PlusIcon
            fill="#FBFFFD"
            width="40"
          />
        </div>
        <div>
          <ContentIcon
            fill="#FBFFFD"
            width="43"
          />
        </div>
        <div className="my-auto">
          <Image 
            src={"/PSX_20200307_104707.jpg"} 
            alt={""}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Menu