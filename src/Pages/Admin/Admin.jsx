import React from 'react'
import './Admin.css'
import Reservations from '../../Components/MyReservations/Reservations'

const Admin = () => {
  return (
    <div>
        <div className="main">

         <div className="nav">

            <div className="logo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACxCAMAAADOHZloAAAAllBMVEX/////SFn4+Pj8////Rlf/OU7/Rlr6j5X/P1T4y87//v//QVP/N03/QVb///73TFv5s7f6cXv4Z3H4fYX21tn9NEf/O1D4w8b78/T/OE73rLH+MEX45uf58/Pzkpf2ztDk5OT23d72urz2pKn2f4f4VGH4W2j3m6L1rrH1hYz24+X4YGz5TVr0n6X2j5f4anP+Ijr2dH0UyPEmAAALDElEQVR4nO2c7XaqPBOGwYQUCfhJIhY/tlpt1Wqfnv/JvZMAKmhnV3St1v3O/UcIMSYXk2RmoHX+OKSv9OenO/Cr1fjpDvxqER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTHelExSfAVrtcXRXOozNOovnQXLk9OC6Jx3WeVee1kp9bv4RPPejw5JtyF3ugqTq3K3ZH9Xd6LDk3QcuoVJe5PL07V7t/qjuR2fru1z1m6PZfOUJkU7/hcl1NzqLocv92BwxtlCCy3/BV7jXGBIAombF2c5z9avTulPbP6d70dnrUx5sFQk1Zg8/t+5EZ6xcztnxPFau3BOdXGsphqe7OPuIuEqubsY62edMg9LH39q4pvJfdB86o5SL9xPTcdgs5fLp6nYC+OI50yAYJ6DxN9tomMrX35lLugedIDOdk4kENvAp3XR0dVNzqdJuFUPA1qlS6ef3mmDN/5RS/93ltt+lETAd3mblshmsPOtrG5qm3BV6VWnKYU++cGX/m400PeG6w99Dpx+JcF4uMsYj1HXG02LdyAQiaVy5AHTc6+hw79fQuWQ6gTNLXflyZUtLG6aFg0rxQ9PpR66qDgiGdPXK03JepLWdWeXCI9PZgOksq0tFLeOBnQ6m1vDzwrrzoHQC9uKLC6YDF/rXGk/gxFvlTc5IPy4dWHXcC6ZjBD6Pf+XKwyCGPY/PHpgOrBXhIKNT9k8DpwsOM2I8wdcHrdJ5lU5QqnXMYmdHFTq3JLlvprOB4HxpHEHTCcYaybiwo2Ll+bJ3bDzY7Z9em4wxcIbHY5NCM5/QJ+PvwicbPT89vSZOTofFu/3+dT46WOo4rzXf7/eLmLEDHTdsOaMOlL7NLpr1N3UzHXCTsx0YejaaLEOlZHfOWMuWdKUxnot4oPdrFWrf1yFvDsC9TXswDmnc3DcYofF3ZeMl1b5Mpxmd9WiptPS1l37ETss0mpivtVk/9XxfarVs2pat7ejGOvWkKW3P6/O5lc7Imo5jQ6R9qrmAnsmwPTXXAjZTEG1d6hzU7oTSejcuTIMVHEVdKG/DgYZwdhqa8qU2NcLY0uFLGeX1ZTqxq1Oi4OR9CY50Vm6Kg8x23KV281LV+2aEdq7b6EAE5HNrOoHTMGORejiEQfO0Y5mwL1cetkvNyAs+7iU6bpbEz+m4PK9sHcYXWL0tHSgX4gDimeUzC74pivq+WzcmvdF2ElW4yWwroXef82lz9w63LbXWA6P8IlQfpNl4tOflJnSBjitkqMJ8ZlmjGYZ59XDiFHSMscIc5cJYT1LQgQa90NPZM5LLe+rfdSOdiRbDLMJ6DsHIY7MhO+xVwY0zR4HTA+MZnzswY89ajtouBoNXrs3dP6cj5HDfnMWdTU5HepNBPF+rSOTBWG47aj3dzJ4tCL042E7anceDV9dOMG9XD89tdIzp2LxOi0nOdWIPYb7tdZYMC5ypEvr1fF1+1eZOy6n5AmOT8CKd6CPnand01/9o2Orjnp9Xt3R4O9vDNkUjlg7ncdb2LoQmhaq39NxGBwap32zfmmFxZNcgzqOeOWwxWHC9xlloYKYH97IVCZbXJ3mJDvgsGVZLJ9oWrbAtLM8C3HBLJ5zltV6gkmgXO/rI7qIt+7AEmqr3fO0mOg1PcJ45Ga+6lCmFfV5lTQ8A25ldz2BY4qTHb/oLOpksnRO3G7ZCuNrJ6WT5joB1tCFeeIOHn2TLKG+8xgBrfSv/3YVnJ7oR7F2nWfdnLdJx1ukl57JKp+PBQMLjevT8BZ3cZa76ymwFA5b7Eh24D94pncPAmGmcu7UWnpvoSC6Kh3ovkp8mluE+FqY0t3OuvPLsTIeXx/Mr6WTe4ef36GRtqVrxxC10OvaZXpD3V2h2xLOAiZbZjsPewVGp0JkY7251PL+WzkReQScOjaHWCrfq0wnMsMPikR6ML9wcLjn96DDR2Jt3lu3Ljb11ev59OtB8dv49OrY8rPVwrTadANZbM/fzH4UbpA+rbMB8ERU5rFZD8ixOPWpgjX1zKLx23TFbHpjtd+i07IbI27UGWZtOy4G94JDcMv5OtD1cbBpWh3kG0yyclr48MsOS64Mf9NWeVaLzcoAJ1uiKsInQEd5hmifG4bk6w52p/syaQoR5TE+wtTx5y6AbuSfh1TgUR2clq202Ha46LHMfTRTyVzpczvLMTmw2dBg/Qsf1nu0Pguu1MrnqsFlrjHXpBM6HdNPNsSBW4uCRQPej7slc2uvqU5i5cWxdtbYI46V/0Vcu04G1w4a2yWvqQnU9cTA60LbZM9nAxq5RvQ29Lp3A2aRCdk9+0/g1KqdlHqKfvt00Srnsl1YeazzmFbplv/8e8stRaIUODD3sddvKhqH2/SCMjuurZXerhtygTMsT+9uqazswk0r20HKaMNN6gCCwR9sSDPPwppxFGFkkQnAp+VcxepWOm9W2cNKY/YUOhFoyyo5sQF9Hdek0lBut2Gl+3EQ/oQk9GQxATUt0zI5WikUDZ6blIbvD5XfoREWCh7tR9uIdQsc2mbeu1nWzg3XpDEKuyw+HWZzC0gBh+toXsPuW3YuVSQOVi5KPNEvVcN1+0jzyDZ13sA2DGMyPS3WkoyOu+1svt7Jwma3/4xSIqQMdFfFIme9GYGOTNCoySJ3aqdO6dCCuUtXv7mGMPTZIufCqyTgTd53lCKefWoWh0vtGvO31tuadhM8eHIDrGK/MweEHdub6gC1cU9/7yB+BOGNTa1XslNOt+Q58mtIX1tymUFktF7XzpvXprOSJe5MLnGfX24P9q3n1Ekyt4YVNtbGZNmeMVe9tq5ixubVlpyxgzNRvFOWtixnrvBQ+krgZJ7c8kqhJh8EC4VffPwmYcUTAnnX/rEvg/nkXnpf+dtWnI882gsB59jh48W12lgxM/r/oLI0Hc16+5SebyInAV1QXin+76q47fXkpoTQ3uwpvjyuPwgMIpGARf7xXUOvS6WgRxlU8c9iuzEOtVWWbCMA1ltsH/NOAunTGSsheqQRWHYCj5uCyyPfK7j0I6+a9f1b1IwlfeLvjeQAliot0zhIeudKbnl5KzOOcR/y7idp9HkOgpJ6Pmf/ZUguRmn0paUtXhJPjY5rNuwQX6CbH44dU/442U+GG3cyXY7MX4/oPp7Act5xGzxOw/jwn9l2l8Q68IH32tttD6IbcYCflJgXxtFisl8p3hbcqVhs2gRWIa7XdT/YfIazTunfmDz+E6ttOizW1BAhSa5+73FeLA4DAiZdDKOO+zThE6fox4dz2LHT8pDyfG0KhN0mOTg5s3WxuXkUyaHS6zV9GejzdQgf2qfH8ZeW2u/tmtR3z9yCL/pK3u7uZwx7179jusM+aVfnixMne6zkPuh5Ht7+vHLSOGYfqJcvlceHQ/8FARXQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwUR0MBEdTEQHE9HBRHQwER1MRAcT0cFEdDARHUxEBxPRwdRw/vx0F36x/vwPFPmnqqNXQ1cAAAAASUVORK5CYII=" 
                alt="" />
            </div>

            <div className="userProfile">
                {/* User Profile Component here */}
            </div>

         </div>
          
          <div className="navButtons">

            <div className="navigation">
                 <button>
                  View reservations
                  {/* View only listing reserved that belong to the Logged in Admin */}
                  </button>
                 <button>
                  View Listing
                  {/* read only listing that belong to the logged in ID */}
                  </button>
                 <button>
                  Create Listing
                  {/* Open Creat Linsting form */}
                  </button>

            </div>
          </div>

         <div className="adminPages">

            <div className="reservations">

                <h2>My Reservations</h2>

                <div className='container'>

                <div className="bookedBy">
                    <span>Booked By</span>
                </div>

                <div className="property">
                   <span>Property</span>
                </div>

                <div className="checkInDate">
                   <span>Check In Date</span>
                </div>

                <div className="checkOutDate">
                    <span>Check out Date</span>
                </div>

                <div className="action">
                <span>Action</span>
                </div>
                    
                </div>

                  <Reservations/>
                  <Reservations/>
                  

            </div>

            <div className="listings">
              {/* Listing Componets here */}
            </div>
            <div className="createlisting">
              {/* Create listing Componet Form here */}
            </div>
         </div>
     
      
        </div>
    </div>
  )
}

export default Admin