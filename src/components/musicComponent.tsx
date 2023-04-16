import HighlightIcon from "./icons/highlightsIcon"
import NewContentIcon from "./icons/newContentIcIcon"
import PlusIcon from "./icons/plusIcon"
import SaveIcon from "./icons/saveIcon"
import AudioPlayer from "../../utils/audioPlayer"


const MusicComponent = () =>{
  return (
    <div>
      <div className="flex justify-between text-sm m-2 my-6">
        <div className="flex gap-1">
          <HighlightIcon
            width="25"
            height="25"
          />
          <h2 className="my-auto text-md font-semibold">Destaques</h2>
        </div>
        <div className="flex gap-1">
          <PlusIcon
            width="25"
            height="25"
          />
          <h2 className="my-auto font-semibold">Criar</h2>
        </div>
        <div className="flex gap-1">
          <NewContentIcon
            width="25"
            height="25"
          />
          <h2 className="my-auto font-semibold">Recentes</h2>
        </div>
        <div className="flex gap-1">
          <SaveIcon
            width="25"
            height="25"
          />
          <h2 className="my-auto font-semibold">Recentes</h2>
        </div>
      </div>

      <div className="p-2">
        <div className="flex gap-2">
          <AudioPlayer src={"/music/if 8.mp3"}/>
          <AudioPlayer src={"/music/if 8.mp3"}/>
          <AudioPlayer src={"/music/if 8.mp3"}/>
        </div>
      </div>
    </div>
  )
}

export default MusicComponent