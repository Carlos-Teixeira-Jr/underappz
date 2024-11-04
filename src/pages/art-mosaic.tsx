import ArtMosaic from "@/components/artMosaic"
import SearchIcon from "@/components/icons/searchIcon"

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

const ArtMosaicPage = ({posts}: any) => {
  return (
    <div className="">
      <div className="mb-4 px-2 my-4">
        <div className="bg-quaternary rounded-lg p-2 flex gap-2">
          <SearchIcon
            width="30"
            height="30"
          />
          <p className="my-auto">Pesquisar...</p>
        </div>
      </div>

      <ArtMosaic posts={posts} />

    </div>
  )
}

export default ArtMosaicPage