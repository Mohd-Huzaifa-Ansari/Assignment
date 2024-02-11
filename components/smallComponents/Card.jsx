import "./Card.css"

import React from 'react'

const Card = (props) => {
  return (
   <>
    <div className="Cards">
    <div className="image-box">
        {/* <img src={props.link}/> */}
        {props.link}
    </div>
    <h5>{props.title}</h5>
    <p>{props.para}</p>
         
    </div>
   </>
  )
}

export default Card
