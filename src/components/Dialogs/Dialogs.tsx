import React from 'react'
import classesDial from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Aleksey'},
        {id: 2, name: 'Evgeniy'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Dmitriy'},
        {id: 5, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Welcome'},
        {id: 4, message: 'My friend'},
        {id: 5, message: 'Perfect'},
    ]

    let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messagesData.map(message => <Message message={message.message} id={message.id}/>)

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