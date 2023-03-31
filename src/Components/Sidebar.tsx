import React from 'react'
import * as types from '../Types'
import ServerICON from './ServerICON.tsx'
import { useParams } from "react-router-dom";

const Sidebar = () => {
    const {id} = useParams()
    console.log(id);
    
    
    const [selected, setSelected] = React.useState(-1)

    const etic1: types.discordServer = {
        id:0,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 0,
        imgUrl: "/assets/etic.png",
        url: "/etic"
    }
    const etic2: types.discordServer = {
        id:2,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 7,
        imgUrl: "/assets/etic.png",
        url: "/etic"
    }
    const etic3: types.discordServer = {
        id:3,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 4,
        imgUrl: "/assets/etic.png",
        url: "/etic"
    }
    const discord: types.discordServer = {
        id:4,
        name: "ETIC-The Dream Team",
        notifications: false,
        mentions: 10,
        imgUrl: "/assets/discord.png",
        url: "/friends"
    }

    return(
        <div className="bg-[#1e1f22] px-[10px] py-[10px] w-[70px] h-[100vh] ">
            <ServerICON Server={discord} isSelected={true} setSelected={()=>setSelected(discord.id)} />
            <hr className="border-[1.5px] w-[60%] m-auto mb-[10px] border-[#36393e]" />
            <ServerICON Server={etic1} isSelected={etic1.id === selected} setSelected={()=>setSelected(etic1.id)} />
            <ServerICON Server={etic2} isSelected={etic2.id === selected} setSelected={()=>setSelected(etic2.id)} />
            <ServerICON Server={etic3} isSelected={etic3.id === selected} setSelected={()=>setSelected(etic3.id)} />
        </div>
    )
}

export default Sidebar;