import React, {Component} from 'react';
import 'boxicons';
import './styles.scss';


import UniversityList from './../../component/UniversityList/index'


class HomePage extends Component {
    render() {
        return (
            <div>
                <main className="l-main">
                    {/* HOME */}
                    <section className="home" id="home">

                    </section>
            
                    {/* UNIVERSITY LIST */}
                    <section className="collection section">
                        <UniversityList />
                    </section>
                </main>
            </div>
        );
    }
};

export default HomePage;