import Header from '@/components/header'
import FavCaroussel from '@/components/favCarroussel'
import PostCard from '@/components/postCard'
import Menu from '@/components/menu'
import DesktopMenu from '@/components/desktopMenu'
import { useEffect, useState } from 'react'
import CommentsSection, { IComment } from '@/components/commentsSection'
import { getSession } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'

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
          'flex flex-col mx-auto'
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
            <div key={idx}>
              <PostCard
                imgUrl={photoUrl}
                alt={""}
                userName={user}
                location={location}
                description={description} 
              />
              <CommentsSection 
                userName={user}
                description={description}
                comments={comments}
                id={id}
              />
            </div>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = (await getSession(context)) as any;

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const posts = await fetch('https://raw.githubusercontent.com/Carlos-Teixeira-Jr/underappz/main/data/postData.json')
    .then((res) => res.json())
    .catch(() => ({}));

  return {
    props: {
      posts
    },
  };
}