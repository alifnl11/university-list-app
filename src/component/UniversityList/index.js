import React from 'react'
import JubahS2 from './../../assets/img/univ.png'
import './styles.scss'

const Posts = ({ posts, loading , searchTerm}) => {
    
    if(loading) {
        return <div className="container"> 
            <div className="loading">
                <box-icon name='loader' animation='spin'></box-icon>
                <h2>Loading...</h2>
            </div>
        </div>
    }
    
    return (
        <div className="univ__container bd-grid">
            { posts.filter((post) => {
                if (searchTerm == "") {
                    return post
                } else if (post.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return post
                }
            }).map(post => {
                return (
                    <div key={post.id} className="univ__product">
                        <div className="univ__box">
                            <div className="univ__new">{post.alpha_two_code}</div>
                            <img src={JubahS2} alt="" className="univ__img"></img>
                        </div>
                        <div className="univ__data">
                            <div className="univ__name">
                                <h3>{post.name} <br></br> <span className="univ__country">{post.country}</span></h3>
                            </div>

                            <div className="univ__website">
                                <span>Website: <br></br>{post.web_pages}</span>
                            </div>

                            <div className="univ__detail" >
                                <a className="univ__view" href={post.web_pages}>View Page</a>
                            </div>
                        </div>
                    </div>
                );
            })} 
        </div>
    )
};

export default Posts