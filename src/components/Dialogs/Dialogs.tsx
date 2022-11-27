import React from 'react'
import classesDial from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {state} from '../Redux/State'

    let dialogElements = state.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = state.dialogsPage.messages.map(message => <Message message={message.message} id={message.id}/>)
export const Dialogs = () => {
    return (
        <div className={classesDial.dialogs}>
            <div className={classesDial.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classesDial.messages}>
                {messagesElements}
            </div>
        </div>
    )
}