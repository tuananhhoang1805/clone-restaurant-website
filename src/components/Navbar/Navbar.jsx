import React , { useState } from 'react'
import images from '../../data/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
const Navbar = () => { 
    const [ toggle , setToggle] = useState(false);
    return (
        <nav className="flex justify-between items-center py-[1rem] px-[2rem] bg-black w-full sm:p-[1rem] text-white"> 
            <div className="flex justify-start items-center">
                <img src={images.gericht} alt="app__logo" className="w-40 sm:w-[110px]"/>
            </div>
            <ul className="flex flex-1 justify-center items-center no-underline lg:hidden">
                <li className="cursor-pointer mx-[1rem]"><a href="#home">Home</a></li>
                <li className="cursor-pointer mx-[1rem]"><a href="#about">About</a></li>
                <li className="cursor-pointer mx-[1rem]"><a href="#menu">Menu</a></li>
                <li className="cursor-pointer mx-[1rem]"><a href="#awards">Awards</a></li>
                <li className="cursor-pointer mx-[1rem]"><a href="#contact">Contact</a></li>
            </ul>
            <div className="flex justify-end items-center sm:hidden no-underline">
                <a href="#login" className="mx-[1rem]">Log In / Registration</a>
                <div className="w-[1px] h-[30px] bg-[#545454]"/>
                <a href="#book" className="mx-[1rem]">Book Table</a>
            </div>
            <div className="hidden lg:flex">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggle(true)}/>
                {
                    toggle && (

                    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-[100vh] bg-[#0C0C0C] z-5 flex-col transition ease-in-out delay-300 animate-slide">
                        <MdOutlineRestaurantMenu fontSize={27} className="absolute top-[20px] right-[20px] cursor-pointer text-[#DCCA87]" onClick={() => setToggle(false)}/>
                        <ul className=" no-underline">
                            <li><a className="items" onClick={() => setToggle(false)} href="#home" >Home</a></li>
                            <li><a className="items" onClick={() => setToggle(false)} href="#about" >About</a></li>
                            <li><a className="items" onClick={() => setToggle(false)} href="#menu" >Menu</a></li>
                            <li><a className="items" onClick={() => setToggle(false)} href="#awards" >Awards</a></li>
                            <li><a className="items" onClick={() => setToggle(false)} href="#contact" >Contact</a></li>
                        </ul>
                    </div>
                )}
          
            </div>
        </nav>
    )
}

export default Navbar