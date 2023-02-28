import Rectangle from "../components/Rectangle";

export default function CarouselSection() {

    return (
        <div style={{ backgroundColor: "#F5F5F5", paddingBottom: "60px" }}>
            <div style={{ paddingTop: "50px", paddingInline: "100px" }}>
                <h2>Lorem ipsum </h2>

                <div>
                    <p style={{
                        width:"540px",
                        height:"57px",
                        lineHeight:"187%"
                    }}>
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting
                        industry. </p>
                </div>

                <div style={{
                    display:"flex",
                    justifyContent: "flex-end",
                    
                }}>
                    <div style={{
                        borderRadius:"50%",
                        backgroundColor:"white",
                        width: "39px",
                        height:"39px",
                        boxShadow:"0px 4px 24px rgba(0, 0, 0, 0.12)",
                        display: "flex",
                        justifyContent:"center",
                        alignItems:"center",
                        marginRight:"20px"
                        
                    }}>
                        &lt;
                    </div>
                    <div style={{
                        borderRadius:"50%",
                        backgroundColor:"white",
                        width: "39px",
                        height:"39px",
                        boxShadow:"0px 4px 24px rgba(0, 0, 0, 0.12)",
                        display: "flex",
                        justifyContent:"center",
                        alignItems:"center",
                        
                    }}>
                        &gt;
                    </div>
                </div>

            </div>

            <div style={{ display: "flex", flexDirection: "row", marginTop:"90px" }}>
                <div style={{ marginInline: "38px" }}>
                    <Rectangle
                        backgroundColor="rgba(12, 190, 100, 0.15)"
                        color="#0CBE64"
                        heading="Lorem ipsum"
                        body="Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since 
                the 1500s,"
                    />
                </div>

                <div style={{ marginInline: "38px" }}>
                    <Rectangle
                        backgroundColor="rgba(220, 0, 0, 0.1)"
                        color="#DC0000"
                        heading="Lorem ipsum"
                        body="Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since 
                the 1500s,"
                    />
                </div>

                <div style={{ marginInline: "38px" }}>
                    <Rectangle
                        backgroundColor="rgba(176, 0, 220, 0.11)"
                        color="#B000DC"
                        heading="Lorem ipsum"
                        body="Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since 
                the 1500s,"
                    />
                </div>

                <div style={{ marginInline: "38px" }}>
                    <Rectangle
                        backgroundColor="rgba(0, 88, 220, 0.09)"
                        color="#0058DC"
                        heading="Lorem ipsum"
                        body="Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since 
                the 1500s,"
                    />
                </div>


            </div>





        </div>
    )
}