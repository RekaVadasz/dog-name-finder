import './reset.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './providers/UserContext';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Profile from './pages/Profile';


function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App;
