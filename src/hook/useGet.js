import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGet = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [empty,setEmpty] = useState(false)
    const getData = async ()=>{
     var d=  await axios.get(url)
       setData(d.data)
    }
    useEffect(()=>{
      getData()
    },[])
  
  return {data,error,empty}
}

export default useGet