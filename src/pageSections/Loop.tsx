import React from 'react'
import StayInTheLoop from '../components/StayInTheLoop'

const Loop = () => {
  return (
    <div style={{
        
    }}>
            <div style={{ paddingTop: "50px", paddingInline: "220px" }}>
                <h2>Lorem ipsum </h2>

                    <p style={{
                        maxHeight:"57px",
                        maxWidth:"545px"

                    }}>
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting
                        industry. 
                    </p>
            </div>

            <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}>
                <StayInTheLoop />
            </div>

    </div>
  )
}

export default Loop
