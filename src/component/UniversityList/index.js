import React from 'react'
import JubahS2 from './../../assets/img/univ.png'
import './styles.scss'

const Posts = ({ posts, loading }) => {
    if(loading) {
        return <h2>Loading..</h2>
    }

    return (
        <div class="univ__container bd-grid">
            { posts.map(post => (
                <div key={post.id} className="univ__product">
                    <div class="univ__box">
                        <div class="univ__new">{post.alpha_two_code}</div>
                        <img src={JubahS2} alt="" class="univ__img"></img>
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
            ))} 
        </div>
    )
};

export default Posts