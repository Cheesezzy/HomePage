import React from 'react'
import Book from "../../public/images/book.svg"
import RecentPageSection2 from './RecentPageSection2'

const RecentProjectSection = () => {
  return (
    <div style={{display:"flex" , 
    flexDirection:"column", 
    justifyContent: "center",
     alignItems:"center",
     paddingBlock: "50px"}}>
        <h2> Our Recent Projects </h2>

        <p style={{
            color:"#525252",
            maxHeight:"57px",
            maxWidth:"497px",
            textAlign: "center",
            marginBottom:"70px"
        }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

        <div style={{
            display:"flex",
            justifyContent: "space-between",
        }}>
            <span>
              <img src={Book} alt="Book" />
            </span>

            <span>
              <img src={Book} alt="Book" />
            </span>

            <span>
              <img src={Book} alt="Book" />
            </span>
        
        </div>

        <div style={{
            display:"flex",
            justifyContent: "space-between",
        }}>
            <span>
              <img src={Book} alt="Book" />
            </span>

            <span>
              <img src={Book} alt="Book" />
            </span>

            <span>
              <img src={Book} alt="Book" />
            </span>
        
        </div>

        <RecentPageSection2 />
    </div>
  )
}

export default RecentProjectSection
