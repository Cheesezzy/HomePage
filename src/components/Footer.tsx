import React from 'react'
import FacebookIcon from "../../public/images/facebook.svg";
import TwitterIcon from "../../public/images/twitter.svg"
import LinkedinIcon from "../../public/images/linkedIn.svg"
import GoogleIcon from "../../public/images/google.svg"



const Footer = () => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#1B1B1B",
                marginTop: "100px",
                color: "white",
                padding: "100px",
                justifyContent:"space-around"

               }}>
                <div style={{}}>
                    <h2>LOGO</h2>

                    <ul style={{
                        listStyle:"none",
                        lineHeight:"30px",
                        paddingLeft:"0",
                        maxHeight:"58px",
                        maxWidth:"372px",
                    }}>
                        <li >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                        <li>
                            @Company.com
                        </li>
                    </ul>

                </div>

                <div>
                    <h5>About us</h5>
                    <ul style={{
                        listStyle:"none",
                        lineHeight:"30px",
                        paddingLeft:"0",
                        maxHeight:"58px",
                        maxWidth:"372px",
                    }}>
                        <li>
                            Company
                        </li>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Contact us
                        </li>
                    </ul>
                </div>

                <div>
                    <h5>Contact us</h5>
                    <ul style={{
                        listStyle:"none",
                        lineHeight:"30px",
                        paddingLeft:"0",
                        maxHeight:"58px",
                        maxWidth:"372px",
                    }}>
                        <li>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </li>
                        <li>
                            +9000 0000 000
                        </li>
                    </ul>
                </div>


                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center",


                    }}
                >
                    <ul
                        style={{
                            display: 'flex',
                            columnGap: '15px',
                            alignItems: 'center',
                            marginBottom: '31px',
                            padding: "10px",
                            listStyle: 'none',

                        }}
                    >
                        <li>
                            <a href="" style={{
                                borderRadius: "50%",
                                backgroundColor: "white",
                                maxWidth: "34px",
                                maxHeight: "34px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: "center",

                            }}>
                                <img src={FacebookIcon} alt="facebook icon" />
                            </a>
                        </li>

                        <li>
                            <a href="" style={{
                                borderRadius: "50%",
                                backgroundColor: "white",
                                maxWidth: "34px",
                                maxHeight: "34px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: "center"

                            }}>
                                <img src={TwitterIcon} alt="Twitter icon" />
                            </a>
                        </li>

                        <li>
                            <a href="" style={{
                                borderRadius: "50%",
                                backgroundColor: "white",
                                maxWidth: "34px",
                                maxHeight: "34px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: "center"

                            }}>
                                <img src={LinkedinIcon} alt="Linkedin icon" />
                            </a>
                        </li>

                        <li>
                            <a href="" style={{
                                borderRadius: "50%",
                                backgroundColor: "white",
                                maxWidth: "34px",
                                maxHeight: "34px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: "center"

                            }}>
                                <img src={GoogleIcon} alt="Google icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div style={{
                margin: "1px",
                backgroundColor: "#1B1B1B",
                color: "white",
                textAlign: "center",
                padding: "20px"
            }}>
                Copyright ® 2021 Company All rights Rcerved
            </div>
        </>

    )
}

export default Footer
