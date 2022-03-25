import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import "./index.css";
import background from './assets/background.png'

ReactDOM.render(
    <>
        <img id='background' src={background}/>
        <Game />  
    </>
  
    , document.getElementById('game'));