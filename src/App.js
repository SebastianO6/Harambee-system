import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element = {
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />  
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
