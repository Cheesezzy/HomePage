import React from 'react'
import Location from "../../public/images/location.svg"
import Cell from "../../public/images/cell.svg"

const Top = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            columnGap: "20px",
            height: "50",
            alignItems:"center"
            

        }}>
            
            <img width="10px" height="15px" src={Location} alt="location" />

            <div style={{
                marginRight:"100px"
            }}>
                <p>Company Address type here</p>

            </div>
            <img width="15px" height="15" src={Cell} alt="cell" />

            <div style={{
                marginRight: "120px",
            }}>
                <p>+94 000 00000</p>

            </div>

        </div>
    )
}

export default Top
