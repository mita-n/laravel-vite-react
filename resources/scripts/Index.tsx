import React, { useState } from "react";
import * as ReactDom from 'react-dom';

const Index = () => {

    //16時だけなぜかユリ熊になる　ここで現在時間を取得
    let now = new Date().getHours();
    
    //数字をランダムにカウントする
    //const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // Hooksを用いているのでthisを使わなくてもstateを参照できる
        setCount(() => count + Math.floor(Math.random() * 100));
    };
    //数字をランダムにカウントする ここまで

    const [nihehe, nihe] = useState('舐花');
    const arusutoromeria = ['甘奈','千雪','舐花'];
    const randomSummer = () => {
        arusutoromeria.map((nihe, index) =>{
            return nihe;
        })
    }
    console.log(nihe)

    if (now !== 16) {
        return (
            <>
                <p>
                    私ポンコツアンドロイドぉ
                    たすけてぇ
                </p>
                <p>クリックしたらランダムに増える</p>
                <li> {count}</li>
                <button onClick={handleClick}>random</button>
                <button onClick={randomSummer}>{nihehe}</button>
            </>
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