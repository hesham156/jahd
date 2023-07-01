import React, { useEffect } from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom';

const Card = ({course}) => {
  return (
    <div className={style.card}>
        <div className="cardHead">
            <Link to={'/course/'+course?.c_id}>
                <img src={course?.img}/>      
      </Link>
        </div>
        <div className="cardFooter">
          
        </div>
    </div>
  )
}

export default Card