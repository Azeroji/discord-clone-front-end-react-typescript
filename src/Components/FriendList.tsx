import React from 'react'
import Friend from './Friend.tsx'
import * as types from '../Types'

export default function FriendList(){
    const [selected, setSelected] = React.useState(-1)
    const user1: types.user ={
        id: 4,
        name: "Dalil",
        imgUrl: "/assets/dalil.jpg",

    }
    const user2: types.user ={
        id: 5,
        name: "John",
        imgUrl: "/assets/user.png",

    }
    const user3: types.user ={
        id: 6,
        name: "Mr Beast",
        imgUrl: "/assets/mrbeast.jpg",

    }

    return(
        <div>
            <div className="bg-[#2b2d31] w-[260px] gap-y-[10px] h-[94%] overflow-hidden">
                <div  className="p-[10px]">
                    <input type="text" placeholder="Rechercher/lancer une conv..." className="focus:outline-none w-[220px] h-[28px] rounded-md bg-[#1e1f22] text-[#D3D3D3] indent-3 text-[13px]" />
                </div>
                <hr className="border-[#1e1f22]" />
                <div className=" m-[10px] ">
                    <button onClick={()=>setSelected(1)} className={`flex items-center gap-x-[23px] p-[10px] ${selected == 1 ? "bg-[#3f4248]" : "bg-[#2b2d31]"} hover:bg-[#3f4248] rounded-[5px] w-full`}>
                        <img src="/assets/Amis.png" width="20px" />
                        <p className="text-[#f2f3f5] text-[14px]">Amis</p>
                    </button>
                </div>
                <div className=" m-[10px] ">
                    <button onClick={()=>setSelected(2)} className={`flex items-center gap-x-[23px] p-[10px] ${selected == 2 ? "bg-[#3f4248]" : "bg-[#2b2d31]"} hover:bg-[#3f4248] rounded-[5px] w-full`}>
                        <img src="/assets/nitro.svg" width="20px" />
                        <p className="text-[#f2f3f5] text-[14px]">Nitro</p>
                    </button>
                </div>
                <div className=" m-[10px] ">
                    <button onClick={()=>setSelected(3)} className={`flex items-center gap-x-[23px] p-[10px] ${selected == 3 ? "bg-[#3f4248]" : "bg-[#2b2d31]"} hover:bg-[#3f4248] rounded-[5px] w-full`}>
                        <img src="/assets/email.png" width="20px" />
                        <p className="text-[#f2f3f5] text-[14px]">Demandes de mesa...</p>
                    </button>
                </div>

                <div className="flex items-center justify-between p-[20px]">
                    <p className="text-[#8c8d96] text-[13px] font-medium">MESSAGES PRIVES</p>
                    <img src="/assets/plus.png" width="10px" />
                </div>
                
                <Friend userFriend={user1} isSelected={selected == user1.id} setSelected={()=>{setSelected(user1.id)}} />
                <Friend userFriend={user2} isSelected={selected == user2.id} setSelected={()=>{setSelected(user2.id)}} />
                <Friend userFriend={user3} isSelected={selected == user3.id} setSelected={()=>{setSelected(user3.id)}} />

            </div>
            <div className="px-[5px] bg-[#232428] flex items-center justify-between h-[6%]">
                <button onClick={setSelected} className={`ml py-[5px] pr-[40px] bg-[#232428] text-[#8c8d96] flex items-center justify-between hover:bg-[#3f4248] text-[15px] font-medium rounded-[5px]`}>
                    <div className="flex items-center gap-x-[8px]">
                        <div className={`overflow-hidden rounded-full bg-[#2b2d31] h-[35px] w-[35px] flex items-center justify-center transition ease-in-out duration-200 relative`}>
                            <img src="/assets/dalil.jpg" width="35px" />
                        </div>
                        <div>
                            <p className="text-white text-[12px] leading-none">Azeroji</p>
                            <p className="text-[10px] text-left">#3269</p>
                        </div>
                    </div>
                </button>
                <div className="flex items-center">
                    <img src='/assets/mic.png' className="mx-[5px]" width="17px"/>
                    <img src='/assets/headset.png' className="mx-[5px]" width="17px"/>
                    <img src='/assets/settings.png' className="mx-[5px]" width="17px"/>
                </div>
            </div>
        </div>
    )
}