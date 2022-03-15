import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import images from '../../data/images'
import Submenu from '../Submenu/Submenu'

const Footer = () => {
  return (

    <div className="w-full relative z-[1] padding flex justify-start items-center flex-col pt-0 bg-[#0C0C0C]bg-[#0C0C0C]" id="login">

        <div className="z-[-1] w-full h-full flex flex-col absolute">
            <div className="h-1/4 bg-[#0C0C0C]" />
            <div className="h-3/4 bg bg-image-bgg" />
        </div>

        <div className="py-8 px-16">
            <div className="text-center">
                <Submenu title="Newsletter" />
                <h1 className="headtext">Subscribe To Our Newsletter</h1>
                <p className="text-opensans">And never miss latest Updates!</p>
            </div>
            <div className="flex items-center justify-center flex-row mt-12 lg:flex-col lg:w-full">
                <input type="email" placeholder="Enter your email address" className="w-[620px] bd rounded-[5px] text-[1rem] font-CU text-white mr-8 bg-[#0C0C0C] px-4 py-3 lg:w-full lg:mb-8 lg:ml-8"/>
                <button type="button" className="button w-max">Subscribe</button>
            </div>
        </div>

        <div className="flex justify-between items-center w-full mt-20 px-8 lg:p-0 lg:items-center lg:flex-col">
            <div className="flex-1 m-4 text-center lg:w-full lg:my-8">
                <h1 className="font-CU text-white font-semibold tracking-wider capitalize text-[32px] leading-[41.6px] mb-4">Contact Us</h1>
                <p className="text-opensans">9 W 53rd St, New York, NY 10019, USA</p>
                <p className="text-opensans">+1 212-344-1230</p>
                <p className="text-opensans">+1 212-555-1230</p>
            </div>

            <div className="flex-1 m-4 text-center lg:w-full lg:my-8">
                <img src={images.gericht} alt="footer_logo" className="w-[210px]  m-auto mb-[.75rem] sm:w-4/5"/>
                <p className="text-opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                <img src={images.spoon} className="w-[45px] mt-[15px] m-auto"  alt=""/>
                <div className="mt-4 flex flex-1 text-center m-4  justify-between text-white">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className="flex-1 m-4 text-center lg:w-full lg:my-8">
                <h1 className="font-CU text-white font-semibold tracking-wider capitalize text-[32px] leading-[41.6px] mb-4">Working Hours</h1>
                <p className="text-opensans">Monday-Friday:</p>
                <p className="text-opensans">08:00 am - 12:00 am</p>
                <p className="text-opensans">Saturday-Sunday:</p>
                <p className="text-opensans">07:00 am - 11:00 pm</p>
            </div>
        </div>
    </div>
    
  )
}

export default Footer