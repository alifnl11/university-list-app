import React from 'react';
import './styles.scss';


const Newsletter = props => {
    return (
        <div class="newsletter__container bd-grid">
            <div class="newsletter__ subscribe">
                <h2 class="section-title">OUR NEWSLETTER</h2>
                <p class="newsletter__description">to get the latest info about campuses in Indonesia. let's immediately write your email in the column below then click the subscribe button</p>

                <form action="" class="newsletter__form">
                    <input type="text" class="newsletter__input" placeholder="Enter your email"></input>
                    <a href="#" class="button">SUBSCRIBE</a>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;