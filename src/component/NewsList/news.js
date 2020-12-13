import React from 'react'
import JubahS2 from './../../assets/img/univ.png'
import './styles.scss'

const News = ({ dataNews, loading , searchTerm}) => {
    
    // if(loading) {
    //     return <div className="container"> 
    //         <div className="loading">
    //             <box-icon name='loader' animation='spin'></box-icon>
    //             <h2>Loading...</h2>
    //         </div>
    //     </div>
    // }
    
    return (
        <div className="news__container bd-grid">
            { dataNews.filter((news) => {
                if (searchTerm == "") {
                    return news
                } else if (news.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return news
                }
            }).map(news => {
                return (
                    <div key={news.id} className="news__product">
                        <div className="news__box">
                            <img src={JubahS2} alt="" className="news__img"></img>
                        </div>

                        <div className="news__data">

                            <div className="news__title">
                                <h3>{news.title}<br></br> <span className="news__subtitle">{news.date}</span></h3>
                            </div>
     
                            <div className="news__description">
                                <h2 className="news__title">Website:</h2>
                                <span>{news.description}
                                </span>
                                <h4>Source : <span className="news__country">{news.source}</span></h4>
                            </div>
                        </div>
                    </div>
                );
            })} 
        </div>
    )
};

export default News