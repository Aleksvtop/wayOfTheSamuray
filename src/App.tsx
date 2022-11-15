import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

// Nothing interesting here

const App = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
