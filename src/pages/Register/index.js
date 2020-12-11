import React, {Component} from 'react';
import './styles.scss'
import 'boxicons';
import LoginImg from './../../assets/img/login.svg';

import { auth, handleUserProfile } from './../../firebase/utils';


const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: [],
};

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
    
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        
        if ( password !== confirmPassword) {
            const err = ['Password Don\'t Match'];
            this.setState({
                errors: err
            });
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName });

            this.setState({
                ...initialState
            });

        } catch(err) {
            // console.log(err);
        }

    }

    render() {
        const { displayName, email , password, confirmPassword, errors } = this.state;

        return (
            <body>
                <div class="login">
                    <div class="login__content">
                        <div class="login__img">
                            <img src={LoginImg} alt=""></img>
                        </div>

                        {errors.length > 0 && (
                            <p>
                                {errors.map((err, index) => {
                                    return (
                                        <p key={index}>
                                            {err}
                                        </p>
                                    );
                                })}
                            </p>
                        )}

                        <div class="login__forms" onSubmit={this.handleFormSubmit}>
                            <form action=""  class=" login__create" id="login-up">
                                <h1 class="login__title">Create Account</h1>
                                {displayName}
                                <div class="login__box">
                                    <box-icon name='user'></box-icon>
                                    <input 
                                        type="text" 
                                        placeholder="Username" 
                                        name="displayName"
                                        value={displayName}
                                        onChange={this.handleChange}  
                                        class="login__input">
                                    </input>
                                </div>

                                <div class="login__box">
                                    <box-icon name='envelope'></box-icon>
                                    <input 
                                        type="email"
                                        name="email" 
                                        value={email}
                                        placeholder="Email" 
                                        onChange={this.handleChange}
                                        class="login__input">
                                    </input>
                                </div>

                                <div class="login__box">
                                    <box-icon name='lock'></box-icon>
                                    <input 
                                        type="password" 
                                        name="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={this.handleChange} 
                                        class="login__input">
                                    </input>
                                </div>

                                <div class="login__box">
                                    <box-icon name='lock'></box-icon>
                                    <input 
                                        type="password" 
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        placeholder="Confirm Password"
                                        onChange={this.handleChange} 
                                        class="login__input">
                                    </input>
                                </div>

                                <button type="submit" class="login__button">Sign Up</button>

                                <div>
                                    <span class="login__account">Already have an Account?</span>
                                    <span class="login__signup" id="sign-in"><a  class=" link" href="login">Sign In</a></span>
                                </div>

                                <div class=" login__social">
                                    <a href="#"  class="login__social_icon"><box-icon name='facebook' type='logo' ></box-icon></a>
                                    <a href="#"  class="login__social_icon"><box-icon name='twitter' type='logo' ></box-icon></a>
                                    <a href="#"  class="login__social_icon"><box-icon name='google' type='logo' ></box-icon></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
    }

}

export default Register;