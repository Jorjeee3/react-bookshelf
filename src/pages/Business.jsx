import React from 'react'
import { useEffect, useState } from 'react'
import Card from '../components/card/Card'

function Business() {

    const [business, setBusiness] = useState([])

    const getDeadline = async () => {
        const apiKey = 'AIzaSyAySeOA_PsyTEQZlrtabjxal9KmrgWQR2o'
        const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=business&maxResults=20&key=${apiKey}`)
        const data = await api.json()
        setBusiness(data.items)
        console.log(data);
    }

    useEffect(() => {
        getDeadline()
    }, [])

  return (
    <div className='business-section'>
        <ul className="card-list">
            {business.map(data => {
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

export default Business