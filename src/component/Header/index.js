import React, { Component } from 'react';
import './styles.scss'
import 'boxicons';
import './main'

class Header extends Component {
    render () {
        return (
            <header class="l-header">
              <nav class="nav header-grid">
                <div>
                  <a href="#" class="nav__logo">expert.id</a>
                </div>
    
                <div class="nav__menu" id="nav-menu">
                  <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link active_header">Home</a></li>
                    <li class="nav__item"><a href="#featured" class="nav__link">Featured</a></li>
                    <li class="nav__item"><a href="#new" class="nav__link">New</a></li>
                    <li class="nav__item"><a href="#subscribed" class="nav__link">Subscribed</a></li>
                    <li class="nav__item"><a href="login" class="nav__link active_header">Login</a></li>
                  </ul>
                  
                </div>
    
                <div>
                    <box-icon name='menu' class="nav__toggle" id="nav-toggle"></box-icon>
                </div>
              </nav>
          </header>
        );
    }
};

export default Header;