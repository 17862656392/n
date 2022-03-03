import React from 'react';
import style from './index.module.scss';
import LeftContainer from '../Left';
import RightContainer from '../Right';
import Header from '../Header';
import { FooterNav } from '../../../components';

class Presentation extends React.Component {
        render() {
                let { activeId, toggleId } = this.props;
                return (
                        <div className="page-wrapper">
                                <div className={ style.header }>
                                        <Header />
                                </div>
                                <div className={ style.content }>
                                        <div className={ style.left }>
                                                <LeftContainer activeId={ activeId } toggleId={ toggleId } />
                                        </div>
                                        <div className={ style.right }>
                                                <RightContainer activeId={ activeId } />
                                        </div>
                                </div>
                                <div className={ style.footer }>
                                        <FooterNav />
                                </div>
                        </div>
                )
        }
}
export default Presentation;