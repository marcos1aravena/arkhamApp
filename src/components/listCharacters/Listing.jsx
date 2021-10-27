import React,{useState} from "react";
import Container from '@mui/material/Container';
import {Select,MenuItem} from "@mui/material";
import ModalCreateLocalStorage from "../modals/ModalCreateLocalStorage";
import { Link } from "@mui/material";
import "../../assets/styles/components/Listing.scss"
import '../../assets/styles/components/CardCharacters.scss'

const Listing = (props) => {
    const localItems = props.localItems
    const [card,setCard] = useState([])
    const [value,setValue] = useState('seleccionar')

    function onChangeList (e){
        e.preventDefault();
        if(e.target.value!=='seleccionar'){
            const result = localItems.filter(data=>data.name === e.target.value)
            setCard(JSON.parse(result[0].value))
            setValue(e.target.value)
        }
    }

    return(
        <Container className="containerHeight">
            <div className="row">
                <div className="col">
                    {localItems.length ? <Select className="SelectLists" labelId="demo-simple-select-label" id="demo-simple-select" onChange={onChangeList} value={value}>
                        <MenuItem value={"seleccionar"}>Select</MenuItem>
                        {
                            localItems.map((e)=>{
                                return(
                                    <MenuItem value={e.name}>{e.name}</MenuItem>
                                )
                            })
                        }
                    </Select> : ''}
                </div>
                <div className="col text-right"><ModalCreateLocalStorage /></div>
            </div>
            {localItems.length ? 
            <div className="row">
                {card.map((m)=>{
                    return(
                        <div className="col colCard">
                            <div className="containerCard">
                                <img src={m.images.md} alt="Snow"/>
                                <Link to={"/detail/"+m.id}>
                                    <div className="bottom">{m.name}</div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
                : "There are no lists created"
            }
        </Container>
    )
}

export default Listing;