import React from 'react'
import * as types from '../Types'

const Friend = ({userFriend, isSelected, setSelected}) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [display, setDisplay] = React.useState(true)

    return(
        <div>
            {display && <div className="mx-[10px] mb-[5px]">
                <button  onClick={()=>{setSelected(); window.location.href=`/friends/${userFriend.id}`}} onMouseOver={()=>{setIsHovered(true)}} onMouseOut={()=>{setIsHovered(false)}} className={`px-[5px] pr-[10px] py-[5px] ${isSelected ? "bg-[#3f4248] text-[#f2f3f5]" : "bg-[#2b2d31] text-[#8c8d96]"} w-full flex items-center justify-between hover:bg-[#3f4248] text-[15px] font-medium rounded-[5px]`}>
                    <div className="flex items-center gap-x-[8px]">
                        <div onClick={setSelected} className={`overflow-hidden rounded-full bg-[#36393e] h-[35px] w-[35px] flex items-center justify-center transition ease-in-out duration-200 relative`}>
                            <img src={userFriend.imgUrl} width="35px" />
                        </div>
                        <p className="">{userFriend.name}</p>
                    </div>
                    {isHovered && <img onClick={()=>{setDisplay(false)}} src='/assets/close.png' width="11px"/>}
                </button>
            </div>}
        </div>
    )
}

export default Friend;