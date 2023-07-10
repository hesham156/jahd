import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGet = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [empty,setEmpty] = useState(false)
    // const getData = async ()=>{
    //  const d=  await axios.get(url)
    //    setData(d.data)
    //    console.log(d);
    // }
    useEffect(()=>{
      axios.get(url)
      .then((data)=>{
        setData(data.data)
      })
      // getData()
    },[])
  
  return {data,error,empty}
}

export default useGet