import { GoMoveToStart } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineMail} from "react-icons/md";
import { Link } from "react-router-dom";
import './style2.css'
import { useState } from "react";

export default function Cadastro(){
    const [user, setUser] = useState ('')
    const [email, setEmail] = useState ('')
    const [senha, setSenha] = useState ('')
    const [reSenha, setReSenha] = useState ('')

    function verificarSenha () {
        if (senha !== reSenha) {
            alert ("As senhas não correspondem.")
        }

        if (senha.length < 8) {
            alert ("Senha Inválida")
        } else {
            
        }
    }

    return (
        <div className="containerCadastro">
            <div className="cardCadastro">
                <div className="topoEsquerdoCadastro">
                    <GoMoveToStart size={20}/> <p>Already member? <Link to="/">Sign In</Link></p>
                </div>
                <div className="cardCadastroMeio">
                    <h1><scan>Sign Up</scan></h1> <p>Secure Your Communications with Easymail</p>
                </div>
                <div className="cardInputs">
                    <div className="input1">
                        <div className="iconInput1">
                            <LuUser2 />
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Create Your Username"
                            onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className="iconInput2" >
                            <FaRegCheckCircle /> 
                        </div>    
                    </div>
                    <div className="input2">
                        <div className="iconInput3">
                            <MdOutlineMail />
                        </div>
                        <div className="input">
                            <input type="email" placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="iconInput4">
                            <FaRegCheckCircle />
                        </div>
                    </div>
                    <div className="input3">
                        <div className="iconInput5">
                            <RiLockPasswordLine />
                        </div>
                        <div className="input">
                            <input type="password" placeholder="Create Your Password"
                            onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="inconInput6">
                            <FaEyeSlash />
                        </div>
                    </div>
                    <div className="listaSenha">
                        <ul>
                            <li>Least 8 characters</li>
                            <li>Least one number (0-9) or a symbol</li>
                            <li>Lowercase (a-z) and uppercase (A-Z)</li>
                        </ul>
                    </div>
                    <div className="input4">
                        <div className="iconInput7">
                            <RiLockPasswordLine />
                        </div>
                        <div className="input">
                            <input type="Password" placeholder="Re-Type Password"
                            onChange={(e) => setReSenha(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="CadastroFim">
                    <div className="divCadastroBtn">
                        <Link
                        onClick={verificarSenha}
                        >
                        <p>Sign Up</p>
                        </Link>
                        <div className="divCadastroBtnIcon">
                        <IoIosArrowRoundForward size={50} />
                        </div>
                    </div>
                    <p><strong>Or</strong></p> 
                    <div className="divBtnFace">
                        <FaFacebook />
                    </div>
                    <div className="divBtnG">
                        <FcGoogle />
                    </div>
                </div>
            </div>
        </div>
    )
}