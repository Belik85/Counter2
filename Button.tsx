import React from "react";
import './App.css';


export type  ButtonPropsType = {
    onClick: () => void
    title:string
    disabled:boolean
}

export function Button(props: ButtonPropsType) {
    return(
        <div>
            <button disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default Button;