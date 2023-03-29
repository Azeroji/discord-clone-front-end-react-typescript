import React from 'react'
import * as types from '../Types'
import ServerICON from './ServerICON.tsx'

const Sidebar = () => {
    const etic1: types.discordServer = {
        id:0,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 0,
        imgUrl: "/assets/etic.png"
    }
    const etic2: types.discordServer = {
        id:2,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 7,
        imgUrl: "/assets/etic.png"
    }
    const etic3: types.discordServer = {
        id:3,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 4,
        imgUrl: "/assets/etic.png"
    }
    const discord: types.discordServer = {
        id:4,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 10,
        imgUrl: "/assets/discord.png"
    }

    const [selected, setSelected] = React.useState(-1)

    return(
        <div className="bg-[#1e1f22] px-[10px] py-[10px] w-[70px] h-[100vh] ">
            <ServerICON Server={discord} isSelected={discord.id === selected} setSelected={()=>setSelected(discord.id)} />
            <hr className="border-[1.5px] w-[60%] m-auto mb-[10px] border-[#36393e]" />
            <ServerICON Server={etic1} isSelected={etic1.id === selected} setSelected={()=>setSelected(etic1.id)} />
            <ServerICON Server={etic2} isSelected={etic2.id === selected} setSelected={()=>setSelected(etic2.id)} />
            <ServerICON Server={etic3} isSelected={etic3.id === selected} setSelected={()=>setSelected(etic3.id)} />
        </div>
    )
}

export default Sidebar;