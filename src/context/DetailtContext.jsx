import React, { createContext, useState, useEffect } from "react";
import { id_character } from '../constants/index.jsx'

export const DetailtContext = createContext();

const DetailContextProvider = ({children}) => {
    const [character, setCharacter] = useState();
    const [defaultValues] = useState({"name":"Sin nombre","appearance":{},"biography":{},"images":{},"powerstats":{},"work":""})
    useEffect(() => {get_character_id()},[]);

    const get_character_id = (id) => {
        if(id === undefined) return defaultValues;
        fetch(id_character+id+".json")
        .then(response => response.json())
        .then((data) => {
            setCharacter(defaultValues)
            if(data)setCharacter(data)
        })
        .catch((error) => console.error(error))
    }

    return(
        <DetailtContext.Provider value={{ character,get_character_id }}>
            {children}
        </DetailtContext.Provider>
    )
}

export default DetailContextProvider;