import React ,{ useState , useRef } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import video from '../../data/video'


const Info = () => {
    const [ play , setPlay ] = useState(false);
    const videoRef = useRef();

    const handlePlay = () => {
        setPlay((prev) => !prev)
        if(play) {
            videoRef.current.play();
        }
        else{
            videoRef.current.pause();
        }
    }
    return (
        <div className="relative h-screen">
            <video
                ref={videoRef}
                src={video.meals}
                className="w-full h-full object-cover opacity-70"
                type="video/mp4"
                loop
                controls={false}
                muted
            />
            <div className="flex items-center justify-center absolute inset-0">
                <div className="flex items-center justify-center w-[100px] h-[100px] rounded-[50%] cursor-pointer bd"
                    onClick={handlePlay}
                >
                    { play ? (
                        <BsPauseFill className="text-white text-[30px]" />
                    ) : (
                        <BsFillPlayFill  className="text-white text-[30px]" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Info