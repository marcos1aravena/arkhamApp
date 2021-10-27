import React, { Fragment, useContext } from "react";
import { CharactersContext } from '../../context/CharactersContext'
import ContainerCharacters from "./Container_characters";
import SearchCharacter from "./SearchCharacter";
import ProgressBar from "../ProgressBar";

const Character_index = () => {
    const { doneFetch,characters,get_data,totalLength } = useContext(CharactersContext);
    return (
        <Fragment>
          <div className="containerHeight">
            <SearchCharacter get_data={get_data} length={totalLength}/>
            {doneFetch ? (
              characters.length ? ( <ContainerCharacters data={characters} />) : "Without results"
            ) : (<ProgressBar />)}
          </div>
        </Fragment>
      );
}

export default Character_index;