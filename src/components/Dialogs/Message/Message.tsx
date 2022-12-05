import classesDial from "../Dialogs.module.css";
import React from "react";


export const Message = (props: any) => {
    return (
        <div>
            <div className={classesDial.message}>{props.message}</div>
            <textarea ></textarea>
        </div>


    )
}