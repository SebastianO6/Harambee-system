import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { authService } from "../services/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  if (!user) return null;

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };    

  return (
    <div>
      <h2>Harambee System Dashboard</h2>
      <p>Welcome, {user?.user?.email || 'Guest'}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
