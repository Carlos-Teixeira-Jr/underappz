import Image from "next/image"


const Menu = () => {
  return (
    <div className="fixed bottom-0 p-2 w-full bg-black">
      <div className="flex justify-between">
        <div>
          Casa
        </div>
        <div>
          Lupa
        </div>
        <div>
          +
        </div>
        <div>
          Videos
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