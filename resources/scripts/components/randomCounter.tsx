// コンポーネント化したかったのですがなぜかindex.tsx側で読み込んでくれないためindex.tsxに直書きしている
import React, { useState } from "react";

const randomCount = () => {
    //数字をランダムにカウントする
    //const [状態変数, 状態を変更するための関数] = useState(状態の初期値);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // Hooksを用いているのでthisを使わなくてもstateを参照できる
        setCount(() => count + Math.floor(Math.random() * 100));
    };
    console.log(setCount)
    return (
        <>
            <p>クリックしたらランダムに増える</p>
            <li> {count}</li>
            <button onClick={handleClick}>random</button>
        </>
    )
}

export default randomCount