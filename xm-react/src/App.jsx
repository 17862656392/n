// 这是根组件
// react如何定义一个组件（类定义 / 函数定义）
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NotLiveRoute from 'react-live-route';
import Pages from './pages';

// 类方式定义组件必须要给render函数，且render函数必须要返回一个jsx对象
// 每一块jsx元素 | 对象，最好用小括号包起来
const LiveRoute = withRouter(NotLiveRoute);
class App extends React.Component{
        render() {
                return (
                        <>
                                <Switch>
                                        <Route path="/" component={ Pages.Home } exact />
                                        <Route path="/category" />
                                        <Route path="/list/:mId/:sId" />
                                        <Route path="/detail" component={ Pages.Detail } />
                                        <Route path="/video" component={ Pages.Video } />
                                        <Route path="/cart" component={ Pages.Cart } />
                                        <Route path="/profile" component={ Pages.Profile } />
                                        <Route path="/login" component={ Pages.Login } />
                                        <Route component={ Pages.NotFound } />
                                </Switch>
                                <LiveRoute path="/category" component={ Pages.Category } alwaysLive={ true }/>
                                <LiveRoute path="/list/:mId/:sId" component={ Pages.List } alwaysLive={ true }  />
                        </>
                );
        }
}
export default App;