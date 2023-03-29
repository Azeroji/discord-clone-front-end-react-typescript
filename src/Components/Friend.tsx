import React from 'react'
import * as types from '../Types'

const Friend = ({userFriend, isSelected, setSelected}) => {
    return(
        <div className="mx-[10px] mb-[10px]">
            <button onClick={setSelected} className={`px-[5px] pr-[10px] py-[2px] ${isSelected ? "bg-[#3f4248] text-[#f2f3f5]" : "bg-[#2b2d31] text-[#8c8d96]"} w-full flex items-center justify-between hover:bg-[#3f4248] text-[15px] font-medium rounded-[5px]`}>
                <div className="flex items-center gap-x-[8px]">
                    <div onClick={setSelected} className={`overflow-hidden rounded-full bg-[#36393e] h-[35px] w-[35px] flex items-center justify-center transition ease-in-out duration-200 relative`}>
                        <img src={userFriend.imgUrl} width="35px" />
                    </div>
                    <p className="">{userFriend.name}</p>
                </div>
                {isSelected && <img src='/assets/close.png' width="10px"/>}
            </button>
        </div>
    )
}

export default Friend;