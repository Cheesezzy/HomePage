import Table from "../../public/images/table.svg"
import Circle from "../components/Circle"
import Mobile from "../../public/images/mobile.svg"


export default function CircleSection() {
    return (
        <section>
            <div style={{}}>
                <div style={{ paddingTop: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ width: "800px", textAlign: "center", height: "100px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h2>
                </div>
                <div style={{ paddingLeft: "170px" }}>
                    <h1>Lorem ipsum</h1>
                    <p style={{ width: "540px", height: "100px", color: "#525252", fontSize: "16px", fontWeight: "400px" }}>
                        Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    </p>
                    <img src={Table} alt="table" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", paddingTop: "50px", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ width: "800px", textAlign: "center", height: "90px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </h2>

                    <p style={{ width: "800px", textAlign: "center", height: "60px", fontSize: "16px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
                <div style={{ display:"flex",flexDirection:"column",marginTop:"80px",rowGap:"100px"}}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <Circle icon={Mobile} title="Mobile Game Development" />
                        <Circle icon={Mobile} title="Mobile Game Development" />
                        <Circle icon={Mobile} title="Mobile Game Development" />
                        <Circle icon={Mobile} title="Mobile Game Development" />
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", columnGap: "100px" }}>
                        <Circle icon={Mobile} title="Mobile Game Development" />
                        <Circle icon={Mobile} title="Mobile Game Development" />
                    </div>
                </div>


            </div>
        </section>

    )
}