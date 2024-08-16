import React from 'react'
import './ListSlistingNavSearch.css'

const ListListingNavSearch = () => {
  return (
    <div className='ListListingNavSearch'>
        <div className="tabs">
            <div className="location tab">
                <span>Cape Town</span>
            </div>
            <div className="dates tab">
                <span>Mar 15-26</span>
            </div>
            <div className="guests tab">
                <span>5 Guests</span>
            </div>
            <div className="searchIcon"></div>
        </div>
    </div>
  )
}

export default ListListingNavSearch