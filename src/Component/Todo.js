import React from "react";
import daniel from "./daniel.jpg"; // gives image path

function Todo(){
    return(
        <div className="Todo">
            <header> <img src={daniel} height={300}  />
            </header>
            <header><h5>Daniel Lyapin</h5>
            </header>
        </div>
    );
}
export default Todo;