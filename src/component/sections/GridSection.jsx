import React from 'react'
import useGet from '../../hook/useGet'
import Card  from '../card/Card'
const GridSection = () => {
    const {data,err,empty}=useGet('http://localhost:3004/courses')
 console.log(data)
  return (
    <section>
    {data?.map((course)=>{
      return <Card key={course.id} course={course}/>
    })}
  </section>
  )
}

export default GridSection