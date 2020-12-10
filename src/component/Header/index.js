import React, { Component } from 'react';
import './styles.scss'
import 'boxicons';
import './main'
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header class="l-header">
              <nav class="nav header-grid">
                <div>
                  <a href="#" class="nav__logo">Univ Search</a>
                </div>
    
                <div class="nav__menu" id="nav-menu">
                  <ul class="nav__list">
                    <li class="nav__item">
                        <Link class="nav__link" to='/'>Home</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__link" to='/newsletter'>Feature</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__link" to='/favorite'>Favorite</Link>
                    </li>
                    <li class="nav__item">
                        <Link class="nav__link" to='/login'>Login</Link>
                    </li>
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