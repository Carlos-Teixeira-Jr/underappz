import { Inter } from 'next/font/google'
import Header from '@/components/header'
import FavCaroussel from '@/components/favCarroussel'
import PostCard from '@/components/postCard'
import Menu from '@/components/menu'
import DesktopMenu from '@/components/desktopMenu'
import { useEffect, useState } from 'react'
import CommentsSection, { IComment } from '@/components/commentsSection'

export async function getStaticProps() {
  const posts = await fetch('https://raw.githubusercontent.com/Carlos-Teixeira-Jr/underappz/main/data/postData.json')
    .then((res) => res.json())
    .catch(() => ({}));

  return {
    props: {
      posts,
    },
  };
}

export interface IPost {
  photoUrl: string
  description: string
  user: string
  location: string
  comments: IComment[]
  id: number
  idx: number
}

const Home = ({ posts }: { posts: IPost[] }) => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize(){
      setIsMobile(window.innerWidth <768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  
  return (
    <main className="max-w-[1536px] lg:flex">

      {!isMobile && (
        <DesktopMenu/>
      )}
      
      <div 
        className={`${
          isMobile ?
          '' :
          'ml-[280px]'
        }`}
      >
        {isMobile && (
          <Header/>
        )}

        <FavCaroussel/>
        
        {posts.map(
          ({
            photoUrl,
            description,
            user,
            location,
            comments,
            id,
            idx
          }: IPost) =>(
            <>
              <PostCard
                key={`${id}`}
                imgUrl={photoUrl}
                alt={""}
                userName={user}
                location={location}
                description={description} 
              />
              <CommentsSection 
                key={`${id}-${idx}`}
                userName={user}
                description={description}
                comments={comments}
                id={id}
              />
            </>
          )
        )}
        


        {isMobile && (
          <Menu/>
        )}
      </div>
    </main>
  )
};

export default Home

