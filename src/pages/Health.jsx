import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/card/Card'

function Health() {

  const [health, setHealth] = useState([])

  const getDeadline = async () => {
    const apiKey = 'AIzaSyAySeOA_PsyTEQZlrtabjxal9KmrgWQR2o'
    const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=health&maxResults=20&key=${apiKey}`)
    const data = await api.json()
    console.log(data);
    setHealth(data.items)
  }

  useEffect(() => {
      getDeadline()
  }, [])

  return (
    <div className='health-section'>
        <h1>health</h1>
        <ul className="card-list">
            {health.map(data => {
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

export default Health