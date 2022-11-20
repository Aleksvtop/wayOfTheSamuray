import React from 'react'
import classesDial from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={classesDial.dialogs}>
            <div className={classesDial.dialogsItems}>
                <div className={classesDial.dialog + ' ' + classesDial.active}>
                    <NavLink to={'/dialogs/1'}>Aleksey</NavLink>
                </div>
                <div className={classesDial.dialog}>
                    <NavLink to={'/dialogs/2'}>Dmitriy</NavLink>
                </div>
                <div className={classesDial.dialog}>
                    <NavLink to={'/dialogs/3'}>Evgeniy</NavLink>
                </div>
                <div className={classesDial.dialog}>
                    <NavLink to={'/dialogs/4'}>Olga</NavLink>
                </div>
                <div className={classesDial.dialog}>
                    <NavLink to={'/dialogs/5'}>Valera</NavLink>
                </div>
            </div>
            <div className={classesDial.messages}>
                <div className={classesDial.message}>Hi</div>
                <div className={classesDial.message}>How are you</div>
                <div className={classesDial.message}>Yo</div>
            </div>
        </div>
    )
}