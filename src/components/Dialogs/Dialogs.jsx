import React from 'react'
import s from './Dialogs.moduale.css';
import {NavLink} from "react-router-dom";

const DialogItem =(props) => {
let path = "/dialogs" + props.id;
    return <div className={s.dialog+ '' + s.active}>
        <NavLink to = {path}>{props.name}
             </NavLink> </div>


}
const Message = (props) => {
   return <div className={s.dialog}> {props.message}
        </div>

}

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div class={s.dialogsItems}>
                <DialogItem name = "Sasha" id="1"/>
                </div>
            <DialogItem name = "Renat" id="2"/>
            <DialogItem name = "Timur" id="3"/>
            <DialogItem name = "Ilsur" id="4"/>



    <div className={s.messages}>
         <Message message ="hi"/>
        <Message message ="how a you"/>
        <Message message ="ho hi"/>



</div>
</div>

    )
}
export  default Dialogs;