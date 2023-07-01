import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGet = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [empty,setEmpty] = useState(false)
    useEffect(()=>{
        axios.get(url)
        .then((data)=>{
            setData(data.data)
            setEmpty(data.data.length===0?true:false)

        })
        .catch((err)=>{
            setError({"err":true,"errMsg":err})
        })
    },[])
  
  return {data,error,empty}
}

export default useGet