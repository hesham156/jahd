import React from 'react'
import { Link } from 'react-router-dom'

const BlockSideNave = () => {
  return (
    <div className='adminSide'>
         <div className='container'>
            <div className='logo'></div>
            <div className="lnks">
                <ul>
                    <li><Link to='/admin/'>Setting</Link></li>
                    <li><Link to='/admin/dashboard/'>dashboard</Link></li>
                    <li><Link to='/admin/categores/'>categores</Link></li>
                    <li><Link>Setting</Link></li>
                    <li><Link>Setting</Link></li>
                    <li><Link>Setting</Link></li>
                    <li><Link>Setting</Link></li>
                </ul>
                </div>            
         </div>
    </div>
  )
}

export default BlockSideNave