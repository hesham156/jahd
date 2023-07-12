import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './select.module.css'
const Select = ({list,activeClass,classs}) => {
    const [active,setActive] = useState(list[0])
  return (
    <ul>
    {list?.map((item)=>{
      return<li key={list.indexOf(item)} onClick={()=>{setActive(item)}} className={`${classs?classs:''} ${style.listitem} ${active?.text==item?.text?activeClass?activeClass:style.active:""}`}>
        <Link to={item.url}>{item.text}</Link>
      </li>
    })}
  </ul>  )
}

export default Select