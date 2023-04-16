import PauseIcon from '@/components/icons/pauseIcon';
import PlayIcon from '@/components/icons/playIcon';
import StopIcon from '@/components/icons/stopIcon';
import { Howl } from 'howler';
import Image from 'next/image';
import { useState } from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);

  const handlePlay = () => {
    if (!sound) {
      const newSound = new Howl({ src: [src] });
      setSound(newSound);
    }

    if(sound){
      sound.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (sound) {
      sound.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (sound) {
      sound.stop();
      setIsPlaying(false);
    }
  };

  return (
    <div className="grid grid-cols-3">
      <div className='w-[150px] h-[100px]'>
        <Image
          src={"/png_20230414_082148_0000.png"}
          alt={""}
          width={140}
          height={100}
        />
      </div>
      
      <div className="flex justify-between h-[38px] px-5 bg-primary">
        {isPlaying ? (
          <div 
            onClick={handlePause} 
            className="my-auto"
          >
            <PauseIcon
              width='30'
              height='30'
            />
          </div>
        ) : (
          <div
            onClick={handlePlay}
            className='my-auto'
          >
            <PlayIcon
              width='30'
              height='30'
            />
          </div>
        )}
        <div 
          onClick={handleStop} 
          className="my-auto"
        >
          <StopIcon
            width='30'
            height='30'
            className=''
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;