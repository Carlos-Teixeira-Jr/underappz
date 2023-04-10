import Image from "next/image"
import HouseIcon from "./icons/houseIcon"
import SearchIcon from "./icons/searchIcon"
import PlusIcon from "./icons/plusIcon"
import ContentIcon from "./icons/contentIcon"


const Menu = () => {
  return (
    <div className="fixed bottom-0 px-5 py-2 w-full bg-black">
      <div className="flex justify-between">
        <div>
          <HouseIcon
            fill="#E92B2B"
            width="40"
          />
        </div>
        <div>
          <SearchIcon
            fill="#E92B2B"
            width="40"
          />
        </div>
        <div>
          <PlusIcon
            fill="#E92B2B"
            width="40"
          />
        </div>
        <div>
          <ContentIcon
            fill="#E92B2B"
            width="40"
          />
        </div>
        <div>
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