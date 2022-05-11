import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/card/Card'

function Sport() {

  const [sport, setSport] = useState([])

    const getDeadline = async () => {
      const apiKey = 'AIzaSyAySeOA_PsyTEQZlrtabjxal9KmrgWQR2o'
      const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=sport&maxResults=20&key=${apiKey}`)
      const data = await api.json()
      console.log(data);
      setSport(data.items)
    }

    useEffect(() => {
        getDeadline()
    }, [])

  return (
    <div className='sport-section'>
        <ul className="card-list">
          {sport.map(data => {
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

export default Sport