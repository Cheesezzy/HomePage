import React from 'react'

const StayInTheLoop = () => {
    return (
        <div style={{
            backgroundColor: "#1B1B1B",
            width: "1170px",
            height: "189px",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "50px",
            color: "white",
        }}>
            <div>
                <h2 style={{
                    width:"300px",
                    height:"45px"
                }}>
                    Stay in the loop
                </h2>

                <p style={{
                    width:"630px",
                    height:"50px"
                }}>
                    Subscribe to receive the latest news and updates about TDA.
                    We promise not to spam you!
                </p>
            </div>
            <div>
                <div style={{
                    backgroundColor:"white",
                    borderRadius:"8px",
                    paddingLeft:"20px",
                    display: "flex",
                    flexDirection:"row",
                    alignItems:"center",

                }}>
                    <input style={{
                        border:"none",
                        borderRadius:"8px", 
                        width:"380", 
                        height:"48px",
                         }}
                        placeholder="Enter email address"
                         />
                    <a href=''
                        style={{
                            marginLeft:"98px",
                            marginRight:"10px",
                            paddingInline:"14px",
                            backgroundColor:"#DC7000",
                            color:"white",
                            borderRadius:"8px",
                            width: "100px",
                            height:"37px",
                            textAlign:"center",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"

                        }}>
                        continue
                    </a>
                </div>
            </div>


        </div>
    )
}

export default StayInTheLoop