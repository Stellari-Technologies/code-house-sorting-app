import { useState } from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css'
import ByteBat from "../assets/ByteBat.png"
import LogicLynx from "../assets/LogicLynxes.png"
import PixelPanther from "../assets/PixelPanthers.png"
import ScriptSaber from "../assets/ScriptSabers.png"

const InfoStyle = {
    padding: '20px',
    textAlign: 'center',
    width: "600px",
    height: "400px",
    backgroundColor: "'#f1f1f1'",
}

const ImageStyle = {
    width: "300px",
    height: "300px",
    border: "10px solid #f11111",
    "border-radius": "50%",
    "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    "clip-path": "circle(50%)",
}

export const Landing = () => {
    //const [open, setOpen] = useState(false) 


    /*const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(!open)
    }*/

    return (
        <div>
            <div className="flex flex-col gap-8 my-8 text-center">
                <h3 className="text-4xl"> Code Ninjas </h3>
                <h1 className="font-bold text-8xl "> CODE HOUSES </h1>

                <div className="flex flex-row justify-around">
                    <Popup 
                        trigger={
                            <button className="rounded-full">
                                <img src={PixelPanther} style={ImageStyle} className="rounded-20" alt="Pixel Panther Logo"/>
                            </button>} 
                        position={"center center"}
                        contentStyle={InfoStyle}
                    >
                        <div>
                            This is inside
                        </div>
                    </Popup>
                    <Popup 
                        trigger={<button className="rounded-full"><img src={ByteBat} style={ImageStyle} alt="Byte Bate Logo"/></button>} 
                        position={"center center"}
                        contentStyle={InfoStyle}
                    >
                        <div>
                            This is inside
                        </div>
                    </Popup>
                    <Popup 
                        trigger={<button className="rounded-full"><img src={LogicLynx} style={ImageStyle} alt="Logic Lynx Logo"/></button>} 
                        position={"center center"}
                        contentStyle={InfoStyle}
                    >
                        <div>
                            This is inside
                        </div>
                    </Popup>
                    <Popup 
                        trigger={<button className="rounded-full"><img src={ScriptSaber} style={ImageStyle} alt="Script Saber Logo"/></button>} 
                        position={"center center"}
                        contentStyle={InfoStyle}
                    >
                        <div>
                            This is inside
                        </div>
                    </Popup>
                </div>

            </div>
        </div>
    )
}