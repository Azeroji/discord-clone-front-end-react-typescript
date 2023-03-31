import React from 'react'

export default function Message({user, message, date}) {

  return (
    <div className="flex gap-x-[15px] px-[20px] mb-[20px]">
        <div className={`overflow-hidden rounded-full bg-[#36393e] h-[35px] w-[35px] flex items-center justify-center transition ease-in-out duration-200 relative`}>
            <img src={user.imgUrl} width="35px" />
        </div>
        <div>
            <div className="flex items-center gap-x-[8px]">
                <p className="text-[15px] font-medium text-[#f2f3f5]">{user.name}</p>
                <p className="text-[#8c8d96] text-[10px]">{date}</p>
            </div>
            <p className=" break-all  w-[75vw] text-[15px] font-regular text-[#B5BAC1]">{message}</p>
        </div>
    </div>
  )
}
