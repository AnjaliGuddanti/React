import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import React, { createContext } from 'react';
import AddPosts from './components/AddPosts';

import Details from './components/Details';
import Header from './components/Header';
import EditPost from './components/EditPost';
export const store =createContext();
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddPosts' element={<AddPosts/>}/>
        <Route path='/view/:Id' element={<Details/>}/>
        <Route path='/editpost/:Id' element={<EditPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
