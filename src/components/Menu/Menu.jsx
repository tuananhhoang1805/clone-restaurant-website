import React from 'react'
import images from '../../data/images';
import data from '../../data/data'
import MenuItem from '../MenuItem/MenuItem'
import Submenu from '../Submenu/Submenu'
const Menu = () => {

    const { wines , cocktails } = data;
    return (
        <div className="bg-[#0C0C0C] flex-col flex justify-center items-center padding" id="menu">
            <div className="text-center mb-[2rem] flex items-center justify-center flex-col">
                <Submenu title="Menu that fits your palatte" />
                <h1 className="headtext">Today&apos;s Special</h1>
            </div>

            <div className="w-full my-[2rem] flex justify-center items-start flex-row lg:flex-col lg:items-center lg:w-full">
                <div className=" flex items-start justify-center flex-1 w-full flex-col">
                    <p className="font-CU font-semibold text-[25px] leading-[58.5px] tracking-wider text-[#fff] sm:text-[35px] sm:leading-[48.5px]">Wine & Beer</p>
                    <div className="flex flex-col my-[2rem] w-full">
                        { wines.map((item , index ) => (
                            <MenuItem  key={index} {...item}/>
                        ))}
                    </div>
                </div>

                <div className="w-[410px] mx-[2rem] lg:my-[3rem] sm:w-full">
                    <img src={images.menu} alt="menu__img" className="w-full h-auto"/>
                </div>

                <div className=" flex items-start justify-center flex-1 w-full flex-col">
                    <p className="font-CU font-semibold text-[25px] leading-[58.5px] tracking-wider text-[#fff]">Cocktails</p>
                    <div className="flex flex-col my-[2rem] w-full">
                        { cocktails.map((item , index ) => (
                            <MenuItem  key={index} {...item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Menu