import React from 'react';
import style from './index.module.scss';

class Presentation extends React.Component {
        render() {
                return (
                        <div className={ style.search }>
                                {/*<img src="./s_ico1.png" alt=''/>*/}
                                <span>搜索商品,品牌</span>
                        </div>
                )
        }
}
export default Presentation;