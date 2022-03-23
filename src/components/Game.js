import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    render() {
        return (
        <div className='mainUI'>
            <h1 id='titulo'>Bienvenido al juego de memoria!</h1>
            <button id="newgameBtn">Nueva Partida</button>
        </div>
        );
        
    }

}

export default Game;