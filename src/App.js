import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Show from './components/Show/Show';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div class='app-wrapper-content'>
                <Routes>
                <Route path='/profile' element={<Profile />}/>
                <Route exact path='/dialogs' element={<Dialogs />}/>
                    <Route path='/show' element={<Show />}/>

            </Routes>
        </div>
</div>
</BrowserRouter>)
}


export default App;