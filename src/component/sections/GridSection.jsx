import React from 'react'
import useGet from '../../hook/useGet'
import Card  from '../card/Card'
const GridSection = ({src}) => {
    const {data,err,empty}= useGet(src)
  return (
    <section>
      <div className="container d-flex flex-column justify-content-center align-items-center gap-2 flex-wrap">
        <div>
             <h2>
                  RoadMaps
             </h2>
        </div>
        <div className='d-flex justify-content-center align-items-center g-1'>
    {data?.map((road)=>{
      return <Card key={road.id} data={road}/>
    })}
    
    </div>
    </div>
  </section>
  )
}

export default GridSection