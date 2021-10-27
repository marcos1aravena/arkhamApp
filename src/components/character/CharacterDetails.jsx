import React, {useContext,useEffect,useState} from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import "../../assets/styles/components/CharacterDetails.scss"
import { DetailtContext } from '../../context/DetailtContext'
import StatisticsCharacter from "./StatisticsCharacter";
import ModalAddCharacterList from "../modals/ModalAddCharacterList";


const CharacterDetails = (localItems) => {
    const { id } = useParams()
    const {get_character_id,character } = useContext(DetailtContext);
    const [defaultValues] = useState({"name":"Sin nombre","appearance":{},"biography":{},"images":{},"powerstats":{},"work":""})
    const {name,appearance,biography,images,powerstats,work} = character ? character : defaultValues
    
    useEffect(() => {
        get_character_id(id)
    }, []);

    return(
        <Container className="pt-4 ">
            <div className="row">
                <div className="col-4">
                    <img className="imgCharacter" src={images.md} alt="characterImg"></img>
                </div>
                <div className="col-5 nowidth">
                    <div className="col">
                        <h1>{name}</h1>
                        &nbsp;
                        <h5>General data</h5>
                        <ul>
                            <li>FullName: &nbsp;{biography.fullName}</li>
                            <li>First Appearance &nbsp;{biography.firstAppearance}</li>
                            <li>Occupation: &nbsp;{work.occupation}</li>
                        </ul>
                        <h5>Appearance</h5>
                        <ul>
                            <li>Gender: &nbsp;{appearance.gender}</li>
                            <li>EyeColor: &nbsp;{appearance.eyeColor}</li>
                            <li>HairColor: &nbsp;{appearance.hairColor}</li>
                            <li>Height: &nbsp;{appearance.height ? appearance.height[1] : "Without stature"}</li>
                            <li>Weight: &nbsp;{appearance.weight ? appearance.weight[1] : "Weightless"}</li>
                        </ul>
                    </div>
                </div>
                <div className="col m-0 p-0">
                    <ModalAddCharacterList localItems={localItems.localItems}  infoCharacter={character}/>
                    <StatisticsCharacter powerstats={powerstats} />
                </div>
            </div>
        </Container>
    )
}

export default CharacterDetails;