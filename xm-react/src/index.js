// 打包入口文件 | react根实例文件
import React from 'react';
import ReactDOM from 'react-dom';
// 导入根组件
import App from './App.jsx';
import './index.css';
// 导入仓库
import { Provider } from 'react-redux';
import store from './store';
// 导入路由
import { BrowserRouter } from 'react-router-dom';

// 将模板转为HTML语言，并插入指定的DOM节点
ReactDOM.render(
        <Provider store={ store }>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </Provider>,
        document.getElementById('root')
);
// render函数有两个参数，作用分别为：渲染什么，渲染到哪
