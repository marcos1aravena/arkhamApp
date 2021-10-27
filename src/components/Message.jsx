import React,{useState} from "react";

const Message = (props) => {
    return(
        <div>
            <div className={ props.isError ? "errorMessage": ""," "+props.isSuccess ? "successMessage":""}>
                {props.isSuccess ? props.successMessage : ""}
                {props.isError ? props.errorMessage : ""}
            </div>
        </div>
    )
}

export default Message;