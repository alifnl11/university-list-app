import React from 'react';
import Footer from '../component/Footer/index';
import Header from './../component/Header/index'

const MainLayout = props => {
    return (
        <div>
            <Header {...props} />
            <div className="main">
                {props.children}
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;