import "./Modal.css";
import { useState } from "react";
function Modal(){
    let image='https://image.fonwall.ru/o/yi/arch-neural-network-rendering.jpeg?auto=compress&fit=resize&w=1200&display=large&domain=img3.fonwall.ru%22,%22thumbnail%22:%22https://image.fonwall.ru/o/yi/arch-neural-network-rendering.jpeg?auto=compress&fit=resize&h=282&w=500&display=thumb&domain=img3.fonwall.ru';
    let [open,setOpen]=useState(false);
    return(
        <div>
            <img src={image} alt="" className="small" style={{display:open ? "none":"block"}} onClick={()=>setOpen(true)} />
            {
                open &&(
                    <div>
                        <img src={image} alt="" className="big" onClick={()=>setOpen(false)} /> 
                    </div>
                )
            }
           

        </div>
    )
}
export default Modal;