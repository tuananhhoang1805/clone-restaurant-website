import React from 'react'
import images from '../../data/images'
import Submenu from '../Submenu/Submenu'
const Chef = () => {
  return (
    <div className="bg bg-image-bgg padding flex items-center justify-between min-h-full md:flex-col">
        <div className="flex items-center justify-start flex-1 mx-8 ">
            <img src={images.chef} alt="chef_image" className="w-4/5 md:w-full md:mb-8"/>
        </div>

        <div className="flex-1 w-full flex items-center justify-center flex-col"> 
            <Submenu title="Chef's word" />
            <h1 className="headtext">What we believe in</h1>

            <div className="flex flex-col w-full mt-20">
                <div className="flex justify-start items-end">
                    <img src={images.quote} alt="quote_image" className="w-[58px] h-[40px] mr-8 mb-4"/>
                    <p className="text-opensans mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                </div>
                <p className="text-opensans mt-0"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
            </div>

            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={images.sign} alt="sign_image" className="w-64 mt-12 sm:w-4/5"/>
            </div>
        </div>
    </div>
  )
}

export default Chef