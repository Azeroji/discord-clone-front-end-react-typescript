import React from 'react'
import Friend from './Friend.tsx'
import './main.css'
import * as types from '../Types.tsx'
import { useParams } from "react-router-dom";

export default function FriendList(){
    const id = useParams()

    const [selected, setSelected] = React.useState(id)
    const user = require("../Data/users.json")

    return(
        <div>
            <div className="bg-[#2b2d31] w-[260px] gap-y-[10px] h-[94vh] overflow-y-auto test">
                <div className="FriendList">
                <div  className="p-[10px]">
                    <input type="text" placeholder="Rechercher/lancer une conv..." className="focus:outline-none w-[240px] h-[28px] rounded-md bg-[#1e1f22] text-[#D3D3D3] indent-3 text-[13px]" />
                </div>
                <hr className="border-[#1e1f22] border-[0.5px]" />
                <div className=" mx-[10px] mt-[10px] mb-[5px]">
                    <button onClick={()=>setSelected(1)} className={`flex items-center justify-between p-[10px] ${selected == 1 ? "bg-[#3f4248]" : "bg-[#2b2d31]"} hover:bg-[#3f4248] rounded-[5px] w-full`}>
                        <div className="flex gap-x-[23px] items-center">
                            <img src="/assets/Amis.png" width="20px" />
                            <p className="text-[#f2f3f5] text-[14px]">Amis</p>
                        </div>
                        <p className="text-[12px] text-white text-bold bg-[#F23F42] rounded-full px-[7px] font-semibold">10</p>
                    </button>
                </div>
                <div className=" mx-[10px] mb-[5px]">
                    <button onClick={()=>setSelected(2)} className={`flex items-center gap-x-[23px] p-[10px] ${selected == 2 ? "bg-[#3f4248]" : "bg-[#2b2d31]"} hover:bg-[#3f4248] rounded-[5px] w-full`}>
                        <img src="/assets/nitro.svg" width="20px" />
                        <p className="text-[#f2f3f5] text-[14px]">Nitro</p>
                    </button>
                </div>
                <div className=" mx-[10px] mb-[5px]">
                    <button onClick={()=>setSelected(3)} className={`flex items-center gap-x-[23px] p-[10px] ${selected == 3 ? "bg-[#3f4248]" : "bg-[#2b2d31]"} hover:bg-[#3f4248] rounded-[5px] w-full`}>
                        <img src="/assets/email.png" width="20px" />
                        <p className="text-[#f2f3f5] text-[14px]">Demandes de mesa...</p>
                    </button>
                </div>

                <div className="flex items-center justify-between mt-[30px] mx-[20px] mb-[10px]">
                    <p className="text-[#8c8d96] text-[13px] font-medium">MESSAGES PRIVES</p>
                    <img src="/assets/plus.png" width="10px" />
                </div>
                
                <Friend userFriend={user[1]} isSelected={selected == user[1].id} setSelected={()=>{setSelected(user[1].id)}} />
                <Friend userFriend={user[2]} isSelected={selected == user[2].id} setSelected={()=>{setSelected(user[2].id)}} />
                <Friend userFriend={user[3]} isSelected={selected == user[3].id} setSelected={()=>{setSelected(user[3].id)}} />

            </div>
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