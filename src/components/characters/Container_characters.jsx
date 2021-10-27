import React from "react";
import Container from '@mui/material/Container';
import CardCharacters from './CardCharacters'

const Container_characters = (data) => {
    const characters = data.data
    return (
        <Container className="">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {characters.map((element,index) => {
                    return(
                        <CardCharacters key={index} character={element}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default Container_characters;