import React, { useState } from "react";
import * as ReactDom from 'react-dom';

const Index = () => {

    let now = new Date().getHours();

    const [count, setCount] = useState(0);

    const handleClick = () => {
        // Hooksを用いているのでthisを使わなくてもstateを参照できる
        setCount(() => count + 1);
    };

    if (now !== 16) {
        return (
            <div>
                <p>
                    私ポンコツアンドロイドぉ
                    たすけてぇ
                </p>
                <p>You clicked {count} times</p>
                <button onClick={handleClick}>+1</button>
            </div>
        );
    }else {
        return (
            <div>
                <div>
                    unchi
                </div>
                <div>
                    { now }時
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61DJNNL8EgL._RI_.jpg" alt="nothing" />
                </div>
            </div>
        );
    }
}
ReactDom.render(<Index />, document.getElementById('index'));