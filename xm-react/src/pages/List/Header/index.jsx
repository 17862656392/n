import Presentation from './presentation.jsx';
import { connect } from 'react-redux';// 连接仓库，映射list，mId是wrapper传来的

const mapStateToProps = ({ category: { list } }, { mId }) => ({
        title: list.length > 0 ? list.find(item => item.id === mId).name : '',
        list: list.filter(item => item.fid === mId)
});
export default connect(mapStateToProps, null)(Presentation);