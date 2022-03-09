import React from 'react'
import images from '../../data/images';
const Header = () => {
    return (
        <div className="bg-[#0C0C0C] flex justify-between items-center min-h-screen" id="home">
            <div className="padding flex-1 w-full flex justify-center items-start flex-col sm:text-center">
                <div className="mb-[1rem] sm:w-full">
                    <p className="font-CU text-[#fff] font-bold tracking-wider capitalize text-[23px] leading-[29.9px] sm:text-[21px]">Chase the new flavour</p>
                    <img src={images.spoon} alt="spoon_image" className="w-[45px] sm:m-auto" />
                </div>
                <h1 className="text-[#DCCA87] font-CU font-bold tracking-wider text-[50px] leading-[67px] capitalize sm:text-[50px] sm:leading-[70px] ">The Key To Fine Dining</h1>
                <p className="text-opensans">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <button type="button" className="button sm:m-auto">Explore Menu</button>
            </div>

            <div className="flex-1 flex w-full justify-center items-center mt-[2rem] md:hidden">
                <img src={images.welcome} alt="header_img" className="w-4/5"/>
            </div>
        </div>
    )
}

export default Header