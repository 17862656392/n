import React from 'react';
import style from './presentation.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Presentation extends React.Component {
        render() {
                let { list, avatar, activeId } = this.props;
                return (
                        <>
                                {avatar !== '' && (
                                        <div className={ style["avatar-wrapper"] }>
                                                <img src={ avatar } alt="" />
                                        </div>
                                )}
                                {list.length > 0 ? (
                                        <ul className={ `${ style.list } clearfix` }>
                                                {list.map(item => (
                                                        <li key={ item.id }>
                                                                <Link to={ `/list/${ activeId }/${ item.id }` }>
                                                                        <img src={ item.avatar } alt=''/>
                                                                        <span>{ item.name }</span>
                                                                </Link>
                                                        </li>
                                                ))}
                                        </ul>
                                ) : (<p>暂无二级分类，敬请期待...</p>)}
                        </>
                )
        }
}
Presentation.propTypes = {
        list: PropTypes.array.isRequired,
        avatar: PropTypes.string.isRequired,
        activeId: PropTypes.number.isRequired
};
export default Presentation;