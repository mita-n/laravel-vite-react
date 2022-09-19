import React, { useState } from "react";
import * as ReactDom from 'react-dom';
import Ruru from './components/ruru'
import Ping from './components/pingdrum'

const Index = () => {
        //数字をランダムにカウントする
    //const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // Hooksを用いているのでthisを使わなくてもstateを参照できる
        setCount(() => count + Math.floor(Math.random() * 100));
    };
    console.log(setCount)

    const [nihehe, nihe] = useState('舐花');
    const arusutoromeria = [1, 2, 3];
    const randomSummer = () => {
        for(let i = 0; i < arusutoromeria.length; i++){
            console.log(arusutoromeria[i])
        }
    }
    console.log(arusutoromeria.length)

    //16時だけなぜかユリ熊になる　ここで現在時間を取得
    let now = new Date().getHours();

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
                <Ruru color="#00a8db" fontSize="25px">てりやき</ Ruru>
            </>
        );
    }else {
        return (
            <>
                <div>
                    <div>
                        unchi
                    </div>
                    <div>
                        { now }時
                    </div>
                    <Ping></Ping>
                </div>
            </>
        );
    }
}
ReactDom.render(<Index></Index>, document.getElementById('index'));