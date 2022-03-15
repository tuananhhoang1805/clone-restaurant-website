import React from 'react'
import Submenu from '../Submenu/Submenu'
import images from '../../data/images'
const FindUs = () => {
  return (
    <div className="bg-image-bgg bg flex justify-between items-center padding" id="contact">
        <div className="flex flex-1 w-full justify-center items-start flex-col">
            <Submenu title="Contact" />
            <h1 className="headtext mb-12" >Find Us</h1>
           <div className="flex items-center justify-center lg:flex-col">
            <div className="flex items-center flex-col justify-center">
                    <p className="text-opensans lg:m-1">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                    <p className="text-cormorant my-8 text-[#DCCA87] lg:m-1">Opening Hours</p>
                    <p className="text-opensans lg:m-1">Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className="text-opensans lg:m-1">Sat - Sun: 10:00 am - 03:00 am</p>
                    <button type="button" className="button mt-8">Visit Us</button>
                </div>

                <div className="flex flex-1 w-full justify-center items-center ml-8 lg:ml-0 lg:mt-8">
                    <img src={images.findus} alt="finus_img" className="w-4/5" />
                </div>  
           </div>
        </div>
    </div>
  )
}

export default FindUs