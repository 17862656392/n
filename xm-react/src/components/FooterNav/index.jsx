import React from 'react';
import style from './index.module.scss';
import { NavLink } from 'react-router-dom';

class FooterNav extends React.Component {
        render() {
                return(
                        <ul className={ style.footer }>
                                <li><NavLink to="/" exact><img src={ require("./footer/home.png")} alt='' /><span>首页</span></NavLink></li>
                                <li><NavLink to="/category"><img src={ require("./footer/category.png")} alt=''  /><span>分类</span></NavLink></li>
                                <li><NavLink to="/video"><img className={ style.video } src={ require("./footer/video.png")} alt=''  /><span>直播表</span></NavLink></li>
                                <li><NavLink to="/cart"><img src={ require("./footer/cart.png")} alt=''  /><span>购物车</span></NavLink></li>
                                <li><NavLink to="/profile"><img src={ require("./footer/person.png")} alt=''  /><span>我的</span></NavLink></li>
                        </ul>
                );
        }
}
export default FooterNav;