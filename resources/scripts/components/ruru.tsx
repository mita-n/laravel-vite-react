import React, { useState } from "react";
import * as ReactDom from 'react-dom';

const Ruru = (props) => {
    console.log(props)
    const fontColor = {
        fontSize: props.fontSize,
        color: props.color
    }
    
    return (
        <>
            <div>
                <div style={fontColor}>{props.children}</div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/61DJNNL8EgL._RI_.jpg" alt="nothing" />
            </div>
        </>
    )
}

export default Ruru