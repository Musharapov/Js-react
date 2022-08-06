import React from 'react'
import s from './Dialogs.moduale.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";








const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Renat'},
        {id: 3, name: 'Timur'},
        {id: 4, name: 'Ilsur'},
    ]
    let messages =[
        {id: 1, message: 'hi'},
        {id: 2, message: 'how a you'},
        {id: 3, message: 'ho hi'},
        {id: 4, message: 'hu'},
    ]

    let dialogsElements = dialogs.map(d=><DialogItem name={d.name} id={d.id}/> );

    let messagesElements = messages.map(m=><Message message={m.mesage}/>);

    return (

        <div className={s.dialogs}>
            <div class={s.dialogsItems}>
                {dialogsElements}


    <div className={s.messages}>
        {messagesElements}

    </div>
            </div>
        </div>

    )
}
export  default Dialogs;