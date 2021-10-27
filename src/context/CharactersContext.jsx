import React, { createContext, useState, useEffect } from "react";
import { list_characters } from '../constants/index.jsx'

export const CharactersContext = createContext();

const CharactersContextProvider = ({children}) => {
    
    const [doneFetch, setDoneFetch] = useState(); //constante para determinar exito del fetch
    const [characters, setCharacters] = useState([]); //contante para albergar los datos
    const [list,setList] = useState([])
    const [totalLength,setTotalLength] = useState(0)

    useEffect(() => {get_data()},[]);

    const get_data = (name,numberSelect) => {
        const quantityItems = numberSelect !== undefined ? numberSelect: 9
        fetch(list_characters)
        .then(response => response.json()) //conversion response a json
        .then((data) => {
            setTotalLength(data.length)
            setList([])
            setCharacters([])
            if(name){
                setList([])
                data.forEach((m,index) => {
                    if( m.name.toLowerCase().includes(name)){
                        if (list.length+1<=quantityItems) list.push({'id':m.id,'name':m.name,'images':m.images})
                    }
                })
                setDoneFetch(true)
                setCharacters(list)
            }
            else{
                data.forEach((m,index) => {
                    if (index+1<=quantityItems) {
                        list.push({'id':m.id,'name':m.name,'images':m.images})
                    }
                })
                setDoneFetch(true)
                setCharacters(list)
            }
            console.log(characters)
        })
        .catch(error => console.error(error))
    }

    return (
        <CharactersContext.Provider value={{ doneFetch, characters,totalLength ,get_data }}>
            {children}
        </CharactersContext.Provider>
    )
}

export default CharactersContextProvider;