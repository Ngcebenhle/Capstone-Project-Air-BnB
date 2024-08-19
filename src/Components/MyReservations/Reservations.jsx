import React from 'react'
import './Reservations.css'

const Reservations = () => {
  return (
    
    <div className='container'>

        <div className="bookedBy">
            <span>Jame Cornor</span>
        </div>
        <div className="property">
            Maldives
        </div>
        <div className="checkInDate">
            23/03/23
        </div>
        <div className="checkOutDate">
            27/03/23
        </div>
        <div className="action">
            <button>
                Delete
            </button>
        </div>
            
    </div>
  )
}

export default Reservations