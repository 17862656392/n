import React from 'react';
import style from './presentation.modul.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IScroll from 'iscroll/build/iscroll-probe';
import imagesLoaded from 'imagesloaded';

class Presentation extends React.Component {
        render() {
                let { list, hasMore } = this.props;
                return(
                        <></>
                )
        }
}
Presentation.propTypes = {
        list: PropTypes.array.isRequired,
        hasMore:PropTypes.bool.isRequired,
        loadMore:PropTypes.func.isRequired
};
export default Presentation;











