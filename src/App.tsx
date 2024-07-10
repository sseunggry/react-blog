import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import 'assets/scss/index.scss';
import Edit from 'pages/Edit';
import Detail from 'pages/Detail';
import Modify from 'pages/Modify';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/edit/:id" element={<Detail />} />
            <Route path="/modify/:id" element={<Modify />} />

            <Route path="*" element={<Home />} />
        </Routes>
    );
}

export default App;
