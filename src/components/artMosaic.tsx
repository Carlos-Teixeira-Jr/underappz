import Image from "next/image"

export interface IArtMosaic {
  posts: {
    photoUrl: string
    id: string
  }[]
}

const ArtMosaic = ({ posts }: IArtMosaic) => {
  return (
    <div className="flex">
      {posts?.map((post: any) => (
        <Image 
          key={post.id}
          src={post.photoUrl} 
          alt={""}
          width={100}
          height={100}
        />
      ))}
    </div>
  )
}

export default ArtMosaic