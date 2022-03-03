import React from 'react';
import Wrapper from './Wrapper';
// 通过react-redux的connect函数方法映射仓库中的state数据
import { connect } from 'react-redux';
import { CategoryActions } from "../../store";
// import { CategoryAPI } from "../../utils/API.js";
// import { actions } from "../../store/category.js";


class Category extends React.Component {
        constructor(props) {
                super(props);
                this.state = { activeId: 0 };
                this.toggleId = this.toggleId.bind(this);
                console.log('Category的construction函数调用了.....')
        }
        toggleId(activeId) {//形参
                this.setState({ activeId }); // activeId:activeId
                // 请求二级分类
                // CategoryAPI.getData({ fid: activeId })
                //         .then(data => {
                //                 this.props.appendData(data);
                //         });
                this.props.getData(activeId);
        }
        render() {
                return (<Wrapper activeId={ this.state.activeId } toggleId={ this.toggleId } />);
        }
        componentDidMount() {  // 组件挂载完毕调用,请求一级
                // CategoryAPI.getData({ fid: 0 })
                //         .then(data => {
                //                 this.toggleId(data[0].id);
                //                 this.props.appendData(data); // 回来的一级分类数据放在仓库中
                //         });
                this.props.getData(0)
                        .then(activeId => { // toggleId调用请求二级
                                this.toggleId(activeId);
                        })
        }
        shouldComponentUpdate(nextProps, nextState) {
                return nextProps.location.pathname === '/category' && this.state.activeId !== nextState.activeId;
        }

}
const mapDispatchToProps = dispatch => ({  // 修改数据
        getData: (activeId) => dispatch(CategoryActions.getData(activeId))
});
export default connect(null, mapDispatchToProps)(Category);