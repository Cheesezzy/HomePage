import Table from "../../public/images/table.svg"
import Circle from "../components/Circle"
import Mobile from "../../public/images/mobile.svg"
import Dot from "../../public/images/dot.svg"
import Ps4 from "../../public/images/ps$.svg"
import Pc from "../../public/images/pc.svg"
import AV from "../../public/images/arvr.svg"
import VR from "../../public/images/arvrd.svg"
import Model from "../../public/images/3dmodel.svg"


export default function CircleSection() {
    return (
        <section>
            <div style={{ marginBlock: "80px" }}>
                <div style={{ paddingTop: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ width: "800px", textAlign: "center", height: "100px", fontSize:"25px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.                    </h2>
                </div>
                <div style={{ paddingLeft: "170px" }}>
                    <h1>Lorem ipsum</h1>
                    <p style={{ width: "540px", height: "100px", color: "#525252", fontSize: "16px", fontWeight: "400px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                    </p>
                    <img src={Table} alt="table" />

                    <div style={{ position: "absolute",
                                    display:"flex",
                                    flexDirection:"column",
                                    right:"400px",
                                    top:"1200px",
                                    zIndex:"-1"
                                    
                                    
                }}>
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;
                        <img src={Dot} alt="dot" height="7px" width="190px"/> &nbsp;

                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", paddingTop: "50px", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ width: "800px", textAlign: "center", height: "90px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.                    </h2>

                    <p style={{ width: "800px", textAlign: "center", height: "60px", fontSize: "16px", color:"#525252" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                    </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "80px", rowGap: "100px" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <Circle icon={Mobile} title="Mobile Game Development" />
                        <Circle icon={Pc} title="PC Game Development" />
                        <Circle icon={Ps4} title="PS4 Game Development" />
                        <Circle icon={AV} title="AR/VR Solutions" />
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", columnGap: "100px" }}>
                        <Circle icon={VR} title="AR/ VR design" />
                        <Circle icon={Model} title="3D Modelings" />
                    </div>
                </div>


            </div>
        </section>

    )
}