import React from 'react'
import useGet from '../../hook/useGet'
import Card  from '../card/Card'
const GridSection = () => {
    const {data,err,empty}=useGet('http://localhost:3004/courses')
 console.log(data)
  return (
    <section>
      <div className="container d-flex justify-content-center align-items-center gap-2 flex-wrap">
        
    {data?.map((course)=>{
      return <Card key={course.id} course={course}/>
    })}
    
    </div>
  </section>
  )
}

export default GridSection