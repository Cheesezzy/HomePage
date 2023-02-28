import React, { CSSProperties } from 'react'


interface Props{
    backgroundColor: CSSProperties['backgroundColor'];
    color: CSSProperties['color'];
    heading: string;
    body: string;
}

const Rectangle = (props: Props) => {
    const { backgroundColor,color, heading, body } = props;

    return (
        <div style={{
            backgroundColor: "white",
            maxWidth: "378px",
            maxHeight: "348px",
            borderRadius: "20px",
            padding: "35px"

        }}>

            <div style={{
                backgroundColor,
                borderRadius: "8px",
                maxWidth: "140px",
                maxHeight: "39px",
                color,
                paddingLeft: "14px",
                paddingBlock: "7px"

                }}>
                Lorem ipsum
            </div>
            <h2>{heading}</h2>
            <p>
            {body}
            </p>
            <span style={{ display: "flex", justifyContent:"flex-end", color:"#DC7000"}}> Read More </span>
        </div>

    )
}

export default Rectangle