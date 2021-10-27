import React from "react";
import '../../assets/styles/components/CardCharacters.scss'
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const CardCharacters = (character,coso) => {
    const {name,images,id}=character.character
    return(
        <div className="col colCard">
            <div className="containerCard">
                <img src={images.md} alt="Snow"/>
                <Link to={"/detail/"+id}>
                    <div className="bottom">{name}</div>
                </Link>
            </div>
        </div>
    )
}

CardCharacters.propTypes = {
    character: propTypes.object.isRequired
}

export default CardCharacters;