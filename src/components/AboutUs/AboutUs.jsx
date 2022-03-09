import React from 'react'
import images from '../../data/images';
const AboutUs = () => {
  return (
    <div className="flex items-center justify-center bg bg-image-bgg padding relative" id="about">
        <div className="flex items-center justify-center absolute inset-0">
            <img src={images.G} alt="G_overlay"  className="w-[391px] h-[415px] z-0 sm:w-4/5 sm:h-[320px] "/>
        </div>

        <div className="flex items-center justify-center w-full z-[2] lg:flex-col">
            <div className="flex flex-1 justify-end items-end flex-col text-right">
                <h1 className="headtext">About Us</h1>
                <img src={images.spoon} alt="about_spoon" className="w-[45px]" />
                <p className="text-opensans text-[#545454] my-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button type="button" className="button">Know More</button>
            </div>

            <div className="mx-[4rem] my-[2rem] flex items-center justify-center lg:my-[4rem]">
                <img src={images.knife} alt="about_knife" className="h-[910px]" />
            </div>

            <div className="flex flex-1 justify-start items-start flex-col text-left">
                <h1 className="headtext">Our History</h1>
                <img src={images.spoon} alt="about_spoon" className="w-[45px]" />
                <p className="text-opensans text-[#545454] my-[2rem]">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                <button type="button" className="button">Know More</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs