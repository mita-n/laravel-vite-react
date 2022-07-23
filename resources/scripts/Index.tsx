import * as React from 'react';
import * as ReactDom from 'react-dom';

const Index = () => {

    let now = new Date().getHours();

    if (now !== 16) {
        return (
            <div>
            私ポンコツアンドロイドぉ
            たすけてぇ
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