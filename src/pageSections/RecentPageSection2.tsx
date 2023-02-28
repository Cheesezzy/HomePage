import React from 'react'
import Recent from "../../public/images/recent.svg"

const RecentPageSection2 = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "80px",
            paddingInline: "100px",
        }}>

            <img width="651px" height="488px" src={Recent} alt="recent" />

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",

            }}>
                <h2 style={{
                    maxWidth: "470px",
                    maxHeight: "90px",
                }}>
                    Lorem Ipsum is simply dummy text dummy text
                </h2>

                <p style={{
                    maxWidth: "500px",
                    maxHeight: "150px",
                    lineHeight: "25px"
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>

                <p style={{
                    maxWidth: "508px",
                    maxHeight: "58px",
                    lineHeight: "25px"
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <div style={{
                    backgroundColor: "#DC7000",
                    maxWidth: "117px",
                    maxHeight: "58px",
                    paddingInline: "45px",
                    paddingBlock: "13px"
                }}>
                    <a href='' style={{
                        color: "white",
                        display:"flex",
                        justifyContent:"center",

                    }}>
                        Read more
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RecentPageSection2