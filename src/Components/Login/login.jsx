import {FaUser, FaLock} from "react-icons/fa";

const Login = () => {
  return (
    <div className="container">
        <from>
            <h1>Acesse o Sistema</h1>
            <div>
                <input type="email" placeholder="E-mail" />
                <FaUser className="icon" />
            </div>
            <div>
                <input type="password" placeholder="Senha" />
                <FaLock className="icon" />
            </div>
            <div className="recall-forget" />
            <lable>
                <input type="checkbox" />
                lembrar de mim
            </lable>
           
            <div>
                <button>Entrar</button>
            </div>
        </from>
    </div>
  )
}

export default Login