import React from 'react';
import style from './presentation.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Presentation extends React.Component {
        render() {
                let { title, list } = this.props;
                return (
                        <>
                                <div className={ style["header-top"] }>
                                        <h1 className={ style.title }>{ title }</h1>
                                </div>
                                <div className={ style["header-nav"] }>
                                        <ul>
                                                {list.map(item => (
                                                        <li key={ item.id }>
                                                                <NavLink to={`/list/${ item.fid }/${ item.id}`} replace>{ item.name }</NavLink>
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        </>
                )
        }
}
Presentation.propTypes = {
        title: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(
                PropTypes.shape({
                        id: PropTypes.number.isRequired,
                        fid: PropTypes.number.isRequired,
                        name: PropTypes.string.isRequired
                })
        ).isRequired
};
export default Presentation;