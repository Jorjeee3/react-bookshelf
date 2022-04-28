import React from 'react'
import { NavLink } from 'react-router-dom';
import { FcBusiness, FcSportsMode } from 'react-icons/fc';
import { GiHealthNormal } from 'react-icons/gi';
import { GrTechnology } from 'react-icons/gr';
import './category.css'
import '@splidejs/splide/dist/css/splide.min.css';

function Category() {
  return (
    <div className="category-section">
      <ul className='category-list'>
        <li className="category-item">
          <NavLink to={'/business'} className="category-item-link">
            <div className="category-icon-werapper">
              <FcBusiness className='category-item-icon' />
            </div>
          </NavLink>
          <NavLink to={'/business'} className="category-item-link">
            <h3 className="category-item-title">Business</h3>
          </NavLink>
        </li> 
        <li className="category-item">
          <NavLink to={'/sport'} className="category-item-link">
            <div className="category-icon-werapper">
              <FcSportsMode className='category-item-icon' />
            </div>
          </NavLink>
          <NavLink to={'/sport'} className="category-item-link">
            <h3 className="category-item-title">Sport</h3>
          </NavLink>
        </li> 
        <li className="category-item">
          <NavLink to={'/health'} className="category-item-link">
            <div className="category-icon-werapper">
              <GiHealthNormal className='category-item-icon' />
            </div>
          </NavLink>
          <NavLink to={'/health'} className="category-item-link">
            <h3 className="category-item-title">Health</h3>
          </NavLink>
        </li> 
        <li className="category-item">
          <NavLink to={'/technology'} className="category-item-link">
            <div className="category-icon-werapper">
              <GrTechnology className='category-item-icon' />
            </div>
          </NavLink>
          <NavLink to={'/technology'} className="category-item-link">
            <h3 className="category-item-title">Technology</h3>
          </NavLink>
        </li> 
      </ul>
    </div>
  )
}

export default Category