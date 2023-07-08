import { faFacebook, faGithub, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Social = ({active}) => {
  return (
    <div className={(active?'sactive':"") + ' socialNave'} >
          <ul>
             <li><a href=""><FontAwesomeIcon icon={faFacebook}/></a></li>
             <li><a href=""><FontAwesomeIcon icon={faInstagram}/></a></li>
             <li><a href=""><FontAwesomeIcon icon={faYoutube}/></a></li>
             <li><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
             <li><a href=""><FontAwesomeIcon icon={faTwitter}/></a></li>
             <li><a href=""><FontAwesomeIcon icon={faPinterest}/></a></li>
          </ul>
    </div>
  )
}

export default Social 