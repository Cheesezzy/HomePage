import HeroImage from "../../public/images/heroSection.svg"
import Rectangle from "../../public/images/rectangle.svg"
import Vector from "../../public/images/vector.svg"
import Vector1 from "../../public/images/vector1.svg";
import Vector2 from "../../public/images/vector2.svg";
import classes from "./HeroSection.module.css"


export default function HeroSection() {
    return (
        <section className={classes.wrapper}>
            <img style={{ position: "absolute", right:"0px", zIndex:"-1"}} src={Vector} alt="vector" />
            <div className={classes.content} >
                <div style={{ display:"flex",rowGap:"30px", minWidth:"500px",zIndex:"1", lineHeight:"50px",flexDirection: "column", justifyContent:"space-between"}}>
                    <span style={{color: "#E87D0E", fontSize:"20px", fontStyle: "normal", height:"31px"}}>
                        Digital Marketing</span>

                    <strong style={{color: "#000000",fontWeight:"bold", fontSize:"30px", lineHeight:"60px" }}> Work that we <br/> produce for our <br/> clients </strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod 
                    </p>

                    <a href="" style={{borderRadius: "40px"}} className={classes.btnDetails}>
                        Get more details
                    </a>
                </div>

                <div style={{ position:"relative", }}>
                    <img style={{ position: "absolute", }} src={Rectangle} alt="rectangle" />
                    <img style={{ zIndex: "1", position:"inherit"}} src={HeroImage} alt="hero section image" />
                </div>
            </div>
            
            <div style={{ marginBottom: "50px"}}>
                <img
                    style={{ position: "absolute", left: "0", top:"200px", width: "100%" }}
                    src={Vector1} 
                    alt="vector1"
                />
                <img
                    style={{ position: "absolute", right:"0",top:"200px", zIndex: "-1", width: "1042px",
                    bottom: "0",
                }}
                    src={Vector2}
                    alt="vector2"
                />
            </div>
        </section>
    )
}