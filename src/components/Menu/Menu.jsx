import React from 'react'
import images from '../../data/images';

const Menu = () => {
  return (
    <div className="bg-[#0C0C0C] flex-col flex justify-center items-center padding" id="menu">
        <div className="text-center mb-[2rem]">
            <div className="mb-[1rem]">
                <p className="font-CU text-[#fff] font-bold tracking-wider capitalize text-[23px] leading-[29.9px] sm:text-[21px]   ">Menu that fits your palatte</p>
                <img src={images.spoon} alt="spoon_image" className="w-[45px]" />
            </div>
            <h1 className="headtext">Today&apos;s Special</h1>
        </div>

        <div className="w-full my-[2rem] flex items-start justify-center">
            <div className="app__specialMenu-menu_wine  flex items-center justify-center">
                <p className="app__specialMenu-menu_heading">Wine & Beer</p>
            </div>
        </div>
    </div>
  )
}

export default Menu