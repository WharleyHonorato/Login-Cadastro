import './style.css'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import Cadastro from '../Cadastro';

export default function Login() {
    return (
        <div className="container">
            <div className="card">
                <div className="ladoEsquerdo">
                    <div className="iconFace">
                        <FaFacebookF size={30} />
                        <div className="facebook">
                        <p>Login with Facebook</p>
                        </div>
                    </div>
                    <div className="iconX">
                        <FaTwitter size={30} />
                        <div className="X">
                        <p>Login with Twitter</p>
                        </div>
                    </div>
                    <div className="iconGoogle">
                        <TiSocialGooglePlus size={30} />
                        <div className="Google">
                        <p>Login with Google+</p>
                        </div>
                    </div>
                </div>
                <div className="divMeio">
                    <div className="divMeioCima">

                    </div>
                    <div className="divMeioOr">
                        <p><strong>OR</strong></p>
                    </div>
                    <div className="divMeioBaixo">

                    </div>
                </div>
                <div className="LadoDireito">
                    <div className="topoDireita">
                        <h2><strong>Sign in manually</strong></h2>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder='Username or email' />
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="direitaMeio">
                        <input type="checkbox"/> <p><strong>Remember Me</strong></p>
                        <div className="direitaMeioBtn">
                            <button>LOGIN</button>
                        </div>
                    </div>
                    <div className="direitaFim">
                        <Link to="/cadastro">
                            <p><strong><scan>Register Now</scan></strong></p>
                        </Link>
                        <div className="divFimVazia">

                        </div>
                        <p>Forgot Password?</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}