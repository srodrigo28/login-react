import { FaUser, FaLock } from 'react-icons/fa'
import "./Login.css"

import { useState } from 'react'

export function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(username === '' || password === ''){
            alert('Preencha todos os campos')
            return false
        }else{
            setPassword('')
            setUsername('')
            alert('Login efetuado com sucesso')
        }
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>

                <div className='input-field'>
                    <input 
                        type="text" 
                        placeholder="E-mail"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className='icon' />
                </div>

                <div className='input-field'>
                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={ (e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon' />
                </div>

                <div className='recall-forget'>
                    <p>
                        <label>
                            <input type="checkbox" />
                               Lembre de min
                        </label>
                        <a href="#"> Esqueci minha senha</a>
                    </p>
                </div>
                <button>Entrar</button>

                <div className='signup-link'>
                    <p>
                        Não tem uma conta ? <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}