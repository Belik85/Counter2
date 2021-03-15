import React, {ChangeEvent} from "react";


export type InputPropsType ={
    title:string
    value:number
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

function Input (props:InputPropsType) {

    return(
        <div>
            <input type='number' title={props.title} onChange={props.onChange} value={props.value}/>
        </div>
    )
}

export default Input;