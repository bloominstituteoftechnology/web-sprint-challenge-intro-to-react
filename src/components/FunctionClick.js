import React from "react";

export default function FunctionClick(){
    function clickHandler() {
        console.log('clicked you')
        }
        return(
            <div>
            <button onClick={clickHandler}> Click me </button>
            </div>
        )
}