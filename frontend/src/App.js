import './reset.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Profile from './pages/Profile';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
