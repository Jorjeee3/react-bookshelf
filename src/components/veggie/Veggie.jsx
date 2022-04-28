import React from 'react'
import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'

// import './veggie.css'
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const apiKey = 'AIzaSyAySeOA_PsyTEQZlrtabjxal9KmrgWQR2o'
        fetch(`https://www.googleapis.com/books/v1/volumes?q=time&maxResults=20&key=${apiKey}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPhotos(data.items)
        })
    },[]);

  return (
    <div className='popular-section'>
        <h2 className='secondary-title'>Time</h2>
        <ul className="popular-list">
            
            <Splide
                options={ {
                    rewind: true,
                    width : '100%',
                    drag: "free",
                    gap: '5rem',
                    perPage: 4,
                    pagination: false,
                    breakpoints: {
                        1000: {
                            perPage: 3,
                        },
                        780: {
                            perPage: 2,
                        },
                        480: {
                            perPage: 1,
                        },
                    }
                  } }
            >
                {photos.map((photo) => {
                    return(
                        <SplideSlide>
                            <li className='popular-item'>
                                <Link to={"/article/" + photo.id } > 
                                    <img className='popular-item-image' src={photo.volumeInfo.imageLinks?.thumbnail} alt={photo.volumeInfo.title} />
                                    <div className="popular-gradient-wrapper">
                                        <span className='popular-item-title'>{photo.volumeInfo.title}</span>
                                    </div>
                                </Link>
                            </li>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </ul>
    </div>
  )
}

export default Veggie