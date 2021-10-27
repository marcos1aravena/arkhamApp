import React, {Fragment} from "react";
import Listing from "./Listing"
import AllLocalStorage from "../custom-hooks/allLocalStorage";

const list_index = () => {
    const localItems = AllLocalStorage()
    return(
        <Fragment>
            <Listing localItems={localItems}/>
        </Fragment>
    )
}
export default  list_index;