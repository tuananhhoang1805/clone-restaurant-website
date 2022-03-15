import React, { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Submenu from '../Submenu/Submenu'
import image from '../../data/images'
import './Gallery.css'

const Gallery = () => {
    const scrollRef = useRef(null);
    console.log(scrollRef)
    const scroll = (direction) => {
        const { current } = scrollRef;
        console.log(current.scrollLeft)
        if (direction === 'left') {
          current.scrollLeft -= 300;
          
        } else {
          current.scrollLeft += 300;     
        }
      };
    const { gallery01, gallery02, gallery03, gallery04 } = image;
    const images = [ gallery01 , gallery02 , gallery03 , gallery04];
    return (
        <div className="flex items-center justify-center flex-row padding bg-[#0C0C0C] lg:flex-col">
            <div className="flex flex-1 justify-center items-start flex-col min-w-[500px] pr-8 lg:mb-16 lg:min-w-[300px]">
                <Submenu title="Instagram" />
                <h1 className="headtext">Photo Gallery</h1>
                <p className="text-opensans text-[#AAAAAA] mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button type="button" className="button mt-4">View More</button>
            </div>

            <div className="flex flex-1 flex-col max-w-[50%] relative lg:max-w-full">
                <div className="flex flex-row w-full overflow-x-scroll scrollBar" ref={scrollRef}>
                    {images.map((image, index) => (
                        <div className="relative min-w-[301px] h-[447px] mr-8 flex items-center justify-center"  key={index} >
                            <img src={image} alt="gallery_image" className="w-full h-full object-cover opacity-100 transitions hover:opacity-40"/>
                            <BsInstagram className="absolute text-white text-[2rem] opacity-0 transitions hover:opacity-100" />
                        </div>
                    ))}
                </div>


                <div className="w-full flex justify-between items-center px-4 absolute bottom-[5%]">
                    <BsArrowLeftShort className="text-[#DCCA87] text-[2rem] cursor-pointer rounded-md  bg-[#0C0C0C]"  onClick={() => scroll('left')}/>
                    <BsArrowRightShort className="text-[#DCCA87] text-[2rem] cursor-pointer rounded-md  bg-[#0C0C0C]"  onClick={() => scroll('right')}/>
                </div>      
            </div>
        </div>
    )
}

export default Gallery