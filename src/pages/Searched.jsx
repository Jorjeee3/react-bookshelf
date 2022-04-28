import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/card/Card'
// import Grid from '../components/grid/Grid'

function Searched() {

    const [searchedResuts, setSearchedResuts] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const apiKey = 'AIzaSyAySeOA_PsyTEQZlrtabjxal9KmrgWQR2o'
        const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=20&key=${apiKey}`)
        const results = await api.json()
        setSearchedResuts(results.items)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search]) 

  return (
    <div>
        searched
        <ul className="card-list">
            {searchedResuts.map(data => {
                return (
                    <li className="card-item" key={data.id} >
                        <Card image={data.volumeInfo.imageLinks?.thumbnail} title={data.volumeInfo.title} id={data.id} />
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Searched