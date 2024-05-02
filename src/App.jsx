import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import LeftNavBar from './components/LeftNavBar';
import WordleSolver from './wordle_solver';

const solver = new WordleSolver();

export default function App() {

  return (
    <>
      <LeftNavBar />
      <div className='right-box'>
        <Outlet />
      </div>
    </>
  )
}
