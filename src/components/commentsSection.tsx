import Image from "next/image"
import HeartIcon from "./icons/heartIcon"

export interface IComment {
  commentatorName: string,
  comment: string
}

export interface ICommentsSection{
  userName: string, 
  description: string
  comments: IComment[],
  id: any
}

const CommentsSection = ({userName, description, comments, id}: ICommentsSection) =>{
  return (
    <div 
      className="flex flex-col gap-2"
      key={id}
    >
      <div className="flex gap-2 px-2">
        <div className="font-bold text-quinary">
          <p>{userName}</p>
        </div>
        <div>
          <p className=" text-quinary">{description}</p>
        </div>
      </div>

      <div className="bg-quaternary rounded-lg">
        {comments.length > 0 && (
          <p className="text-quinary font-thin text-xs p-2">Ver todos os {comments.length} comentários</p>
        )}

        {comments.map((comment, index) => (
          <div 
            className="rounded-md"
            key={index}
          >
            <div className="flex justify-between px-2">
              <div className="flex gap-4">
                <p className="font-bold text-quinary">{comment.commentatorName}</p>
                <p>{comment.comment}</p>
              </div>
              <HeartIcon
                width="15"
                height="25"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mb-2">
        <div className="flex gap-2 px-2">
          <div className="my-auto">
            <Image 
              src={"/PSX_20200307_104707.jpg"} 
              alt={""}
              width={25}
              height={25}
              className="rounded-full"
            />
          </div>
          <div className="py-2">
            <p className=" text-quinary">Adicione um comentário</p>
          </div>
          
        </div>
        <p className="text-sm text-gray-500 px-2">Há 6 horas atrás</p>
      </div>
    </div>
  )
}

export default CommentsSection