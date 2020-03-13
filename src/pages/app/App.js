import React , {useState , useEffect} from 'react';
import { Route , Switch} from 'react-router-dom';
import './App.css';
// Componants
import Board from '../../componants/gameBoard/GameBoard';

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;
