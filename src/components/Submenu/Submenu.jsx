import React from 'react'
import images from '../../data/images'
const Submenu = ({title}) => {
  return (
    <div className="mb-[1rem] flex-col">
        <p className="font-CU text-[#fff] font-bold tracking-wider capitalize text-[23px] leading-[29.9px] sm:text-[21px]">{title}</p>
        <img src={images.spoon} alt="spoon_image" className="w-[45px] sm:m-auto" />
    </div>
  )
}

export default Submenu