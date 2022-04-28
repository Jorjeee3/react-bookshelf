import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import './article.css'

function Article() {

    let params = useParams()
    const [details, setDetails] = useState({})

    const fetchDetails = async () => {
        const data = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.name}`)
        const detailsData = await data.json()
        setDetails(detailsData)
        console.log(detailsData);
    }

    useEffect(() => {
        fetchDetails()
    }, [params.name]) 

  return (
    <div className='book-details' >
      <div className="card-book-wrapper">
        <img
          src={details && details.volumeInfo ? details.volumeInfo.imageLinks.thumbnail : undefined}
          alt={details && details.volumeInfo ? details.volumeInfo.title : undefined}
          className="book-image"
        />
      </div>
      <div className="book-informaton">
        <h2 className='book-title'>
          {details && details.volumeInfo ? details.volumeInfo.title : undefined}
        </h2>
        <article className="book-informaton-wrapper">
          <div className="book-author">
            <h3 className='informaton-title'>Authors:</h3>
            <span className='author'>{details && details.volumeInfo ? details.volumeInfo.authors[0] : undefined}</span>
          </div>
          <div className="book-description">
            <h3 className='informaton-title'>Description:</h3>
            <p className="description">
              {/* {details && details.volumeInfo ? <p dangerouslySetInnerHTML={{ __html: details.volumeInfo.description}}/> : undefined} */}
              {details && details.volumeInfo ? !details.volumeInfo.description ? <p>no description</p> : <p dangerouslySetInnerHTML={{ __html: details.volumeInfo.description}} />  : undefined}
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Article