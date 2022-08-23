import type { NextPage } from "next";

interface Props {
  track: any,
  choosetrack: any,
}

const Track: NextPage<Props> = ({track, chooseTrack}) => {
  return (
    <div className='flex items-center justify-between space-x-20 cursor-default
    hover:bg-white/10 py-4 rounded-lg group transition ease-out '>
      <div className='flex items-center'>
        <img 
        src={track.albumUrl} 
        alt="" 
        className="rounded-xl h-12 w-12 
        object-cover mx-3"
        />
        <div className="text-white text-sm font-semibold truncate w-[450px]">
        <h4>{track.title}</h4>
        <p className="text-[rgb(179,179,179)] text-[13px] 
        font-semibold">{track.artist}</p>
        </div>
      </div> 
    </div>
  )
}

export default Track;  