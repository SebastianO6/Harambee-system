import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate()

    useEffect(() => {
      if (!authService.getCurrentUser()) {
        navigate('/login')
      }  
    }, [navigate])

    return children
}