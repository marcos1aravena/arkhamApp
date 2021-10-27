import {useState} from "react";

 const AllLocalStorage = () => {
    const [items] = useState([])
    const keys = Object.keys(localStorage)
    let i = keys.length;

    while ( i -- ) {
        items.push( {"name":keys[i],"value":localStorage.getItem(keys[i])} );
    }

    return items;
}

export default AllLocalStorage;