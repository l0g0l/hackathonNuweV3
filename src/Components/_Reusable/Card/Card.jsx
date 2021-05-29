import React from 'react'

import carrot from '../../../Images/carrot.svg'

import './card.scss'

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="car-img">
                    <img src={carrot} alt="carrot" />
                </div>
                <div className="card txt">
                    <p>Repository Name: {props.apidata.name}</p>
                    <p>Repository id: {props.apidata.id}</p>
                </div>

            </div>

        </div>
    )
}

export default Card
