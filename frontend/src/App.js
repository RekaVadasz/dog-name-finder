import './reset.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Profile from './pages/Profile';
import Login from './pages/login/Login';


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NoPage />} />
                    <Route path='/login' element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;
