import Image from "next/image"


const FavCaroussel = () => {
  return (
    <div className="flex">
      <div className="p-2 w-fit">
        <Image 
          src={"/PSX_20200307_104707.jpg"} 
          alt={""}
          width={80}
          height={80}
          className="rounded-full border-[3px] border-primary"
        />
        <p className="text-center text-quinary">Nome</p>
      </div>
      <div className="p-2 w-fit">
        <Image 
          src={"/PSX_20200307_104707.jpg"} 
          alt={""}
          width={80}
          height={80}
          className="rounded-full border-[3px] border-primary"
        />
        <p className="text-center text-quinary">Nome</p>
      </div>
      <div className="p-2 w-fit">
        <Image 
          src={"/PSX_20200307_104707.jpg"} 
          alt={""}
          width={80}
          height={80}
          className="rounded-full border-[3px] border-red-800"
        />
        <p className="text-center text-quinary">Nome</p>
      </div>
      <div className="p-2 w-fit">
        <Image 
          src={"/PSX_20200307_104707.jpg"} 
          alt={""}
          width={80}
          height={80}
          className="rounded-full border-[3px] border-primary"
        />
        <p className="text-center text-quinary">Nome</p>
      </div>
    </div>
  )
}

export default FavCaroussel