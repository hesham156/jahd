import React, { useEffect } from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  return (
    <div className={style.card}>
        <div className="cardHead">
            <Link to={data.roadmap?'/road/'+data?.roadmap:'/course/'+data?.c_id}>
                <img src={data?.img}/>      
      </Link>
        </div>
        <div className="cardFooter">
          
        </div>
    </div>
  )
}

export default Card