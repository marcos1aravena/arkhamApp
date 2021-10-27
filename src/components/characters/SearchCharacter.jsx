import React, {useState} from "react";
import Container from '@mui/material/Container';
import '../../assets/styles/components/SearchCharacter.scss'
import propTypes from 'prop-types';

const SearchCharacter = ({get_data,length}) =>{
    const [name,setName] = useState("")
    const [numberItems,setNumberItems] = useState(9)

    function onChangeNumber (e){
        setNumberItems(e.target.value)
        get_data(name,e.target.value)
    }
    return(
        <Container className="mt-3">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <input className="inputSearch" type="text" placeholder="Ingresar nombre" onChange={(e)=>setName(e.target.value)}/>
                        <button className="seachButton" onClick={() => get_data(name,numberItems)}>Search</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="">Showing&nbsp;</div>
                <div>
                    <select name="quantityItems m-3" onChange={(e)=>onChangeNumber(e)}>
                        <option value={9}>9</option>
                        <option value={20}>20</option>
                        <option value={60}>60</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                        <option value={500}>500</option>
                    </select>
                </div>
                <div>&nbsp;results to {length}</div>
            </div>
        </Container>
    )

}

SearchCharacter.propTypes = {
    length:propTypes.number
}

export default SearchCharacter;