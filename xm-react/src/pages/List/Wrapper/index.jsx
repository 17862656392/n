import React from 'react';
import Header from '../Header';
import Content from '../Content';

class Presentation extends React.Component {
        render() {
                return(
                        <>
                                <div>
                                        <Header />
                                </div>
                                <div>
                                        <Content />
                                </div>
                        </>
                )
        }
}
export default Presentation;