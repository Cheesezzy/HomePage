import React from 'react'
import Book from "../../public/images/book.svg"
import RecentPageSection2 from './RecentPageSection2'
import Rec16 from "../../public/images/rec16.svg"
import Rec17 from "../../public/images/rec17.svg"
import Rec18 from "../../public/images/rec18.svg"
import Rec19 from "../../public/images/rec19.svg"
import Rec20 from "../../public/images/rec20.svg"

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
            margin:"10px"

        }}>
            <span>
              <img style={{
                     margin:"10px"
              }} src={Book} alt="Book" />
            </span>

            <span>
              <img style={{
                     margin:"10px"
              }} src={Rec16} alt="Book" />
            </span>

            <span>
              <img style={{
                     margin:"10px"
              }} src={Rec17} alt="Book" />
            </span>
        
        </div>

        <div style={{
            display:"flex",
            justifyContent: "space-between",
        }}>
            <span>
              <img style={{
                     margin:"10px"
              }} src={Rec19} alt="Book" />
            </span>

            <span>
              <img style={{
                     margin:"10px"
              }} src={Rec18} alt="Book" />
            </span>

            <span>
              <img style={{
                     margin:"10px"
              }} src={Rec20} alt="Book" />
            </span>
        
        </div>

        <RecentPageSection2 />
    </div>
  )
}

export default RecentProjectSection
