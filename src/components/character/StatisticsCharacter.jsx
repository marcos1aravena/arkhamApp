import React,{useState} from "react";
import propTypes from 'prop-types';

function changeWidth (id,value) {
    if (document.getElementById(id) != null) {
        document.getElementById(id).style.width=value+"%"
        document.getElementById(id).style.transition= 'width 2s'
    }
}

const StatisticsCharacter = (powerstats) => {
    const [defaultValues] = useState({"powerstats":{"power":0,"strength":0,"speed":0,"durability":0}})
    const {power,strength,speed,durability} = Object.keys(powerstats.powerstats).length !== 0 ? powerstats.powerstats : defaultValues

    changeWidth("power",power)
    changeWidth("strength",strength)
    changeWidth("speed",speed)
    changeWidth("durability",durability)

    return(
        <div className="col-3 p-0 mt-4" style={{maxWidth:"100%"}}>
            <div className="powerStatsBox">
                <div className="col colTitle">
                    Statistics
                </div>
                <div className="p-3">
                    <div className="col">Power</div>
                    <div className="progress ml-4">
                        <div id="power" className="power"></div>
                    </div>

                    <div className="col">Strength</div>
                    <div className="progress ml-4">
                        <div id="strength" className="strength"></div>
                    </div>

                    <div className="col">Speed</div>
                    <div className="progress ml-4">
                        <div id="speed" className="speed"></div>
                    </div>

                    <div className="col">Durability</div>
                    <div className="progress ml-4">
                        <div id="durability" className="durability"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

StatisticsCharacter.propTypes = {
    powerstats: propTypes.object
}

export default StatisticsCharacter;