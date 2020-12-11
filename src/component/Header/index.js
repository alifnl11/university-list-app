import React, { Component } from 'react';
import './styles.scss'
import 'boxicons';
import './main'
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header className="l-header">
              <nav className="nav header-grid">
                <div>
                  <a href="#" className="nav__logo">Univ Search</a>
                </div>
    
                <div className="nav__menu" id="nav-menu">
                  <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link" to='/'>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to='/newsletter'>Newsletter</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to='/favorite'>Favorite</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to='/login'>Login</Link>
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