import{FaUser,FaLock} from 'react-icons/fa' 
import{IoMdMail} from 'react-icons/io' 
import { useState } from 'react'
import "./Login.css"
import imagembarros from '../../assets/Logo.png'
import logo from '../../assets/sinalibras.png'


const Login = () => {

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [senha, setSenha2] = useState("")
  const [date, setDate] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    alert ("Enviando os dados " + username + " - " + password + " - " + name + " - " + senha + " - " + date)

  }

  return (
    <div className='container'>

      <form onSubmit={handleSubmit}>
        
        
        <img className='logo' src={imagembarros} alt="" />

        <div className='input-field'>
        <input 
        type="email" 
        placeholder='E-mail' 
        required 
        onChange={(e) => setUsername(e.target.value)} />
        <IoMdMail className='icon'/>
        </div>

        <div className='input-field'>
        <input type="nome" placeholder='Nome' 
        onChange={(e) => setName(e.target.value)} />
        <FaUser className='icon'/>
        </div>
        
        <div className='input-field'>
        <input type="password" placeholder='Senha' 
        onChange={(e) => setPassword(e.target.value)} />
        <FaLock className='icon'/>
        </div>
        
        <div className='input-field'>
        <input type="password" placeholder='Confirmar Senha' 
        onChange={(e) => setSenha2(e.target.value)}/>
        <FaLock className='icon'/>
        </div>

        <div className='input-field'>
        <input type="date" placeholder='00/00/0000'
         onChange={(e) => setDate(e.target.value)} />
        </div>


        
        <div>
          <button id='Cadastrar'>Cadastrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login
