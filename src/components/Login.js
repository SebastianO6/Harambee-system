import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from '../services/auth';
import './Login.css';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.login(email, password);
        } catch (err) {
            setError('Invalid credentials');
        }
    }

    return (
        <div className="auth-form">
            <h2>Login</h2>

            <form onSubmit={handlesubmit}>
                <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                />
                <input
                type="password"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                /> 
                <button type = "submit">Login</button>
                <p>Dont have an account? </p>
                <button onClick={() => navigate('/register')}  
                className="register-button">Sign Up
                </button>
            </form> 
        </div>
    )
}