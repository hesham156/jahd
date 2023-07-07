import React from 'react'
import { Link } from 'react-router-dom'

const SideNave = ({active}) => {
    const sidenave = {
    position: "absolute",
    width: active?"100%":"0%",
    height: "100vh",
    zIndex: 1,
    background: "#3dcbb8",
    right:0,
    transition: "all 0.3s ease-in-out",
    transitionDelay: active?"0.0s":"0.5s",
    overflow:"hidden"
    }
    const layer = {
        position: "absolute",
        width: active?"100%":"0%",
        height: "100vh",
        zIndex: 1,
        background: "#000",
        right:0,
        transition: "all 0.3s ease-in-out",
        transitionDelay: active?"0.2s":"0.3s",
        overflow:"hidden"
        }
  return (
    <div style={sidenave}>
        <div className='layer' style={layer}></div>
           <div className="container position-relative z-1">
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <ul>
                        <li><Link style={{color:"#fff"}}>side</Link></li>
                    </ul>
                </div>
           </div>
        </div>
  )
}

export default SideNave