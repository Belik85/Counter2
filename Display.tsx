import React from 'react';
import './App.css';



function Display(props: { count: number, max: number, error:string|boolean}) {

    return (
        <div className={props.count === props.max || props.count > props.max ? "error-message" : "display"}>
            {props.count} {props.error}
        </div>
    );
}

export default Display;

