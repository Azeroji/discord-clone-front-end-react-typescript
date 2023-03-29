import React from 'react'
import * as types from '../Types'

const ServerICON = ({Server, isSelected, setSelected}) => {
    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    return(
        <button className="relative h-[55px] w-[55px] mb-[10px]">
            <div onClick={setSelected} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`overflow-hidden hover:bg-[#5865f2] ${isSelected ? "rounded-2xl bg-[#5865f2]" : "rounded-full bg-[#36393e]"} hover:rounded-2xl h-[50px] w-[50px] flex items-center justify-center transition ease-in-out duration-200 relative`}>
                <img src={Server.imgUrl} width="30px" />
            </div>
            {(Server.mentions > 0) && <p className="absolute text-[12px] text-white text-bold -bottom-[5%] -right-[5%] bg-[#F23F42] rounded-full px-[7px] border-[4px] font-semibold border-[#1e2124]">{Server.mentions}</p>}
            {(isHovering || isSelected) && <div className={`hover:hidden w-[9px]  ${isSelected ? "absolute top-[8.5px] h-[40px]" : "absolute top-[17.5px] h-[20px]"} left-[-30%] rounded-full bg-white ease-out duration-500`}></div>}
            <div>
                {/* <p>{Server.name}</p> */}
            </div>
        </button>
    )
}

export default ServerICON;