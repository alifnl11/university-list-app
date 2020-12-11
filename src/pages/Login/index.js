import React, {Component} from 'react';
import "./styles.scss"
import 'boxicons';
import LoginImg from './../../assets/img/login.svg'
import { signInWithGoogle, auth } from './../../firebase/utils';

const initialState = {
    email: '',
    password: ''
}

class Login extends Component {
    constructor(props) {
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

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });

        } catch(err) {
            // console.log(err);
        }

    }


    render() {
        const { email, password } = this.state;

        return (
            <body>
                <div class="login">
                    <div class="login__content">
                        <div class="login__img">
                            <img src={LoginImg} alt=""></img>
                        </div>

                        <div className="login__forms">
                            <form action="" class="login__register" id="login-in" onSubmit={this.handleSubmit}>
                                <h1 class="login__title">Sign In</h1>

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

                                <a href="#" class="login__forgot">Forgot password?</a>

                                <button type="submit" class="login__button">Sign In</button>

                                <p class="login__with">Or login with</p>

                                <div class=" login__social">
                                    <a href="#"  class="login__social_icon"><box-icon name='facebook' type='logo' ></box-icon></a>
                                    <a href="#"  class="login__social_icon"><box-icon name='twitter' type='logo' ></box-icon></a>
                                    <a href="#"  class="login__social_icon" onClick={signInWithGoogle}><box-icon name='google' type='logo' ></box-icon></a>
                                </div>

                                <div>
                                    <span class="login__account">Don't have an Account?</span>
                                    <span class="login__signin" id="sign-up"><a class="link" href="register">Sign Up</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        )
    }

}

export default Login;