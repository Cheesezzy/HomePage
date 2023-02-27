import Arrow from "../../public/images/leftArrow.svg"

interface Props {
    icon: string;
    title: string;
}

export default function Circle(props: Props) {
    const { icon, title } = props;
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems:"center",
                rowGap: "10px"
                
            }}>
                <div style={{
                    width: "65px",
                    height: "65px",
                    display: "flex",
                    borderRadius: "50%",
                    backgroundColor: "rgba(220, 112, 0, 0.09)",
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                    <img style={{
                        width: "50px",
                        height: "50px"
                    }}
                        src={icon}
                        alt="mobile"
                    />
                </div>
                <p style={{
                }}>
                    {title}
                </p>

                <div>
                    <img src={Arrow} alt="Arrow" />
                </div>
            </div>



        </>

    )
}