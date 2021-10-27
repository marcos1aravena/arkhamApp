import React,{useEffect,useState} from "react";

const Message = (props) => {
    const [value,setValue] = useState()
    useEffect(() => {
        if(props.isSuccess && !props.isError){
            setValue("successMessage")
        }else if(!props.isSuccess && props.isError){
            setValue("errorMessage")
        }else{
            setValue("")
        }
    },[props.isSuccess]);
    return(
        <div>
            <div className={value}>
                {props.isSuccess ? props.successMessage : ""}
                {props.isError ? props.errorMessage : ""}
            </div>
        </div>
    )
}

export default Message;