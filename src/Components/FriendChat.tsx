import React from 'react'
import { useParams } from "react-router-dom";
import Message from './Message.tsx';
import './main.css'

export default function FriendChat () {
    const [messages, setMessages] = React.useState([]);
    const [msg, setMsg] = React.useState({
        value: "",
        date: ""
    });
    const friend = useParams();
    const user = require("../Data/users.json")
    let id = -1;
    for(let i = 0;i<user.length;i++){
        let temp = String(user[i].id);
        if(temp === friend.id ){
            id = i;
            break;
        }
    }

    function handleChange(event){
        const {value} = event.target
        const d = new Date()
        const test = (d.toString()).replace("GMT+0100 (West Africa Standard Time)","")
        setMsg({
            value : value,
            date : test
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
    
        setMessages([...messages, msg]);
        setMsg({
            value : "",
            date : ""
        })
      };

    const MessageList = messages.map(message => {return(<Message user={user[0]} message={message.value} date={message.date} />)})
    console.log(MessageList)

    return (
        <div className="flex-1">
            {   (id >= 0) &&
                <div>
                    <div className="h-[93vh] flex flex-col justify-between overflow-y-auto test">
                        <div>
                            <div className="flex justify-between p-[10px] px-[20px]">
                                <div className="flex items-center gap-x-[5px] ">
                                    <img src="/assets/arobase.png" width="28px" />
                                    <p className="text-[15px] font-medium text-[#f2f3f5]">{user[id].name}</p>
                                </div>
                                <div className="flex items-center gap-x-[22px]">
                                    <img src="/assets/call.png" width="20px" />
                                    <img src="/assets/video-camera.png" width="20px" />
                                    <img src="/assets/pin.png" width="20px" />
                                    <img src="/assets/add-user.png" width="20px" />
                                    <img src="/assets/profile-user.png" width="20px" />
                                    <input type="text" placeholder="Rechercher" className="focus:outline-none w-[134px] h-[22px] rounded-[4px] bg-[#1e1f22] text-[#D3D3D3] indent-3 text-[13px]" />
                                    <img src="/assets/inbox.png" width="20px" />
                                    <img src="/assets/question-mark.png" width="20px" />
                                </div>
                            </div>

                            <hr className="border-[#1e1f22] border-[0.5px]" />

                            <div className="p-[20px]">
                                <div className={`overflow-hidden rounded-full bg-[#313338] h-[80px] w-[80px] flex items-center justify-center transition ease-in-out duration-200 relative`}>
                                        <img src={user[id].imgUrl} width="80px" />
                                </div>
                                <p className="text-[27px] font-semibold text-[#f2f3f5]">{user[id].name}</p>
                                <p className="text-[#B5BAC1] text-[14px] py-[10px] pb-[30px]">Ceci est le début de l'historique de tes messages privés avec <span className="font-semibold">{user[id].name}</span></p>

                                <hr className="border-[#8c8d96] "/>
                            </div>
                        </div>

                        <div>
                            {MessageList}
                        </div>


                    </div>

                    <div className="px-[20px] relative">
                        <form onSubmit={handleSubmit}>
                            <input className="w-[100%] h-[45px] rounded-md bg-[#383a40] text-[15px] text-[#B5BAC1] focus:outline-none font-regular indent-[50px]" value={msg.value} onChange={handleChange} type="text" placeholder={`Envoyer un message à @${user[id].name}`}/>
                        </form>
                        <img src="/assets/add.png" width="20px" className="absolute top-[28%] left-[2.3%]" />
                        <div className="flex items-center gap-x-[8px] absolute top-[20%] right-[2.3%]">
                            <img src="/assets/gift.png" className="mr-[4px]" width="20px"/>
                            <img src="/assets/gif.png" width="20px" />
                            <img src="/assets/sticker.png" width="30px"/>
                            <img src="/assets/happy.png" width="20px" />
                        </div>
                    </div>


                </div>
            }
        </div>
    )
}
