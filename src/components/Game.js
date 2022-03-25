import React, { Component } from 'react';
import { useState } from 'react';
import './Game.css';
import BackgroundIMG from '../assets/background.png'

const cardsSources = [
    { "src" : "../assets/turtwig.png"},
    { "src" : "../assets/greninja.png"},
    { "src" : "../assets/rowlet.png"},
    { "src" : "../assets/pikachu.png"}
]

function NewGame() {
    const [cartas, setcartas] = useState([]);
    const [turnos, setturnos] = useState(0);

    const randomize = () => {
        const cartasRandomized = [...cardsSources, ...cardsSources].sort(() => Math.random() - 0.5).map((carta) => ({...carta, index: Math.random()})) //Array de cartas ya randomizadas

        setcartas(cartasRandomized)
        setturnos(0)
        
    }

    console.log(cartas,turnos)
}


class Game extends Component {

    render() {
        return (
        <>
            <div className='mainUI'>
                <h1 id='titulo'>Bienvenido al juego de memoria!</h1>
                <button onClick={NewGame} id="newgameBtn">Nueva Partida</button>
            </div>
        </>

        );
        
    }

}

export default Game;