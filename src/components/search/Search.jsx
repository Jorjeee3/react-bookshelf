import React  from 'react'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './search.css'

function Search() {

    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('evef');
        navigate('searched/' + input)
    }

  return (
    <form className='search-form' onSubmit={submitHandler} >
        <label className='search-label'>
            <input
                type="text"
                className='search-input'
                placeholder='type smth...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </label>
        <button className='search-button'>
            <FaSearch className='search-button-icon' />
        </button>
    </form>
  )
}

export default Search