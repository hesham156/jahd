import React from 'react'
import style from './searchnave.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchNave = () => {
  return (
    <div className={style.searchnave +' d-flex justify-content-center align-items-center flex-row'}>
        <div className={style.search+' w-75 d-flex justify-content-center align-items-center'}>
            <form className='w-100'>
                <input type='text' placeholder='search' />
                <button>
                <FontAwesomeIcon icon={faSearch}/>
                  <p>Search</p>
                  </button>
            </form>
        </div>
        <div className={style.user+' w-25 d-flex justify-content-end align-items-center'}>
          <div className='d-flex justify-content-center align-items-center gap-1'>
              <div className='userIcon'>
                <div>
                  <img src='https://trello-members.s3.amazonaws.com/637b2998c72e98017e124101/7a267947f4d98fd6e43846fa7eb6fee5/30.png'/>
                </div>
              </div>
              <div className={style.userName}>
                <div>
                  <p>hesham</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SearchNave