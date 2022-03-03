import { connect } from 'react-redux';
import Presentation from './presentation.jsx';

// 这个函数返回一个对象
const mapStateToProps = ({ category: { list } }, props) => ({ // props是展示组件需要的数据
        ...props,
        list: list.filter(item => item.fid === 0)
        // ...props,  （展开数据）
       // list: list.filter(item => item.fid === 0) （在需要的数据在追加一个list）
       //  这俩将会被传给Presentation组件
});
export default connect(mapStateToProps, null)(Presentation);
//const mapStateToProps = (state, props) => {};
// connect将mapStateToProps作为第一个参数才能获取state，
// 上面的export default connect(mapStateToProps, null)(Presentation)中，
//Presentation被包住，那么Presentation这个组件就会获得映射来的值，即，这个容器组件
//将东西传给Presentation组件