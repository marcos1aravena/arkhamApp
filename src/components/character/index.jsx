import React, { Fragment } from "react";
import CharacterDetails from "./CharacterDetails";
import AllLocalStorage from "../custom-hooks/allLocalStorage";

const IndexCharacterIndex = () => {
    const localItems = AllLocalStorage()
    return (
        <Fragment>
          <CharacterDetails localItems={localItems}/>
        </Fragment>
      );
}

export default IndexCharacterIndex;