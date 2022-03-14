import React from 'react'

const MenuItem = (props) => {
    const { title , tags , price } = props;
    return (
        <div className="w-full my-[1rem] flex flex-col">
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <p className="text-cormorant text-[#DCCA87]">{title}</p>
                </div>
                <div className="w-[90px] h-[1px] bg-[#DCCA87] mx-[1rem]" />
                <div className="flex justify-end items-end">
                    <p className="text-cormorant">{price}</p>
                </div>
            </div>

            <div className="w-full mt-[.2rem]">
                <p className="text-opensans text-[#AAAAAA] m-0">{tags}</p>
            </div>
        </div>
    )
}

export default MenuItem