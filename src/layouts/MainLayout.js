import React from 'react';
import Footer from '../component/Footer/footer';
import Header from '../component/Header/header'

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