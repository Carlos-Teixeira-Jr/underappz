import CreateForm from "@/components/createForm";
import DesktopMenu from "@/components/desktopMenu";
import Header from "@/components/header";
import { useEffect, useState } from "react";


const TextMosaicPage = () => {

  const [isMobile, setIsMobile] = useState(false);

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

        <CreateForm />
      </div>
    </main>
  )
}

export default TextMosaicPage;