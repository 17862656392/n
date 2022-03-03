import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // 让dispatch可以接受函数参数，来发送ajax
// 导入子reducer
import category, { actions as CategoryActions } from './category.js';

export {
        CategoryActions
}

const reducer = combineReducers({
        category
});
// 声明并创建总仓库
const store = createStore(
        reducer,
        // compose(
        //         applyMiddleware(thunk),
        //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // )
);
export default store;