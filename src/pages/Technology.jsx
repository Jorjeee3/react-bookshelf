import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/card/Card'

function Technology() {

  const [technology, setTechnology] = useState([])

    const getDeadline = async () => {
      const apiKey = 'AIzaSyAySeOA_PsyTEQZlrtabjxal9KmrgWQR2o'
      const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=technology&maxResults=20&key=${apiKey}`)
      const data = await api.json()
      console.log(data);
      setTechnology(data.items)
    }

    useEffect(() => {
        getDeadline()
    }, [])

  return (
    <div className='deadline-section'>
        <ul className="card-list">
          {technology.map(data => {
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

export default Technology