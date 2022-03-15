import React from 'react'
import Submenu from '../Submenu/Submenu'
import data from '../../data/data'
import image from '../../data/images'

const AwardCard = (props) => {
    const { imgUrl, title, subtitle } = props;
    return(
        <div className="flex flex-1 justify-start items-start min-w-[230px] m-4 sm:m-w-full sm:my-4">
            <img src={imgUrl} alt="awards" className="w-16 h-16 sm:h-12 sm:w-12" />
            <div className="flex flex-col ml-4">
                <p className="text-cormorant text-[#DCCA87]">{title}</p>
                <p className="text-opensans lg:m-0">{subtitle}</p>
            </div>
        </div>
    )
}
const Laurels = () => {
    const { awards } = data;
    return (
        <div className="bg bg-image-bgg padding flex justify-start items-center min-h-screen overflow-hidden md:flex-col-reverse md:p-8"  id="awards">
            <div className="flex flex-1 w-full justify-center items-start flex-col">
                <Submenu title="Awards & recognition" />
                <h1 className="headtext">Our Laurels</h1>

                <div className="flex justify-start items-center flex-wrap mt-12">
                    {awards.map((award , index ) => <AwardCard key={index} {...award}/>)}
                </div>
            </div>

            <div className="flex flex-1 w-full justify-center items-center ml-8">
                <img src={image.laurels} alt="laurels_img" className="w-4/5 lg:w-full lg:mb-12 lg:m-4"/>
            </div>
            
        </div>
    )
}

export default Laurels