import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/Home';
import './App.css';
import Insert from "./Component/Insertpost";
import Display from "./Component/Display";
import Update from "./Component/Update";
import Edit from "./Component/Edit";
import Search from "./Component/Search";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/insert' element={<Insert />} />
          <Route path='/display' element={<Display />} />
          <Route path='/update' element={<Update />} />
          <Route path='/search' element={<Search />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
