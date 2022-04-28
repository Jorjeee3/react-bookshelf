import React from 'react'
import { Link } from 'react-router-dom'
// import Article from '../../pages/Article';

import './card.css'

function Card(props) {
  return (
    <>
      <Link to={"/article/" + props.id } > 
        <div className="card-image-wrapper">
          <img src={props.image} alt="" className='card-image'/>
        </div>
        <span className='card-title'>{props.title}</span>
      </Link>
    </>
  )
}

export default Card