import {NavLink} from "react-router-dom";
import classesDial from "../Dialogs.module.css";
import React from "react";


export const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return (<div className={classesDial.dialog + ' ' + classesDial.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}