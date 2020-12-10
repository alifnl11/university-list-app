import React, {Component} from 'react';
import 'boxicons';
import './styles.scss';

import JubahS2 from './../../assets/img/univ.png'

class UniversityList extends Component {
    constructor(props) {
        super();
        this.state = {
            university: []
        }
    };

    fetchUpcoming() {
        fetch('http://universities.hipolabs.com/search?country=indonesia')
        .then(res => res.json())
        .then(data =>
            this.setState({
                university: data
            })    
        )
    }

    componentDidMount(){
        this.fetchUpcoming();
    }

    render() {
        console.log(this.state.university)
        return (
            <div className="main__content">
                <div class="univ__container bd-grid">
                    { this.state.university.map((university) =>(
                        <div key={university.id} className="univ__product">
                            <div class="univ__box">
                                <div class="univ__new">NEW</div>
                                <img src={JubahS2} alt="" class="univ__img"></img>
                            </div>
                            <div className="univ__data">
                                <div className="univ__name">
                                    <h3>{university.name} <br></br> <span className="univ__country">{university.country}</span></h3>
                                </div>

                                <div className="univ__website">
                                    <span>Website: <br></br>{university.web_pages}</span>
                                </div>

                                <div className="univ__detail" >
                                    <a className="univ__view" href={university.web_pages}>View Page</a>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        );
    }
};

export default UniversityList;