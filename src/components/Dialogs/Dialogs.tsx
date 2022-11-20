import React from 'react'
import classesDial from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return (<div className={classesDial.dialog + ' ' + classesDial.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

const Message = (props: any) => {
    return (
        <div className={classesDial.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={classesDial.dialogs}>
            <div className={classesDial.dialogsItems}>
                <DialogItem name={'Aleksey'} id={'1'}/>
                <DialogItem name={'Evgeniy'} id={'2'}/>
                <DialogItem name={'Olga'} id={'3'}/>
                <DialogItem name={'Dmitriy'} id={'4'}/>
                <DialogItem name={'Valera'} id={'5'}/>
            </div>
            <div className={classesDial.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    )
}