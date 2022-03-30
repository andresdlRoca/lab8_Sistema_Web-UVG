import React, { useState, useEffect } from "react";
import './Game.css';
import CartaBackside from '../assets/cardback.png';
import turtwig from '../assets/turtwig.png';
import pikachu from '../assets/pikachu.png';
import greninja from '../assets/greninja.png';
import rowlet from '../assets/rowlet.png';
import Card from "./Card";
import music from "../assets/music.mp3"

export default function GameHooks() {
    const cardsSources = [
        { "src" : turtwig, matched: false},
        { "src" : pikachu, matched: false},
        { "src" : greninja, matched: false},
        { "src" : rowlet, matched: false}
    ]   

    const [cartas, setCartas] = useState([{}]);
    const [turnos, setTurnos] = useState();
    const [firstSelect, setFirstSelect] = useState(null);
    const [secondSelect, setSecondSelect] = useState(null);

    //Randomizador de cartas
    function changeCartas($event) {
        $event.preventDefault();

        const cartasRandomized = [...cardsSources, ...cardsSources].sort(() => Math.random() - 0.5); //Array de cartas ya randomizadas
        
        setCartas(cartasRandomized);
        setTurnos(0)
    }

    //Chequeo de cartas
    const chequeoCartas = (carta) => {
        firstSelect ? setSecondSelect(carta) : setFirstSelect(carta)

    }

    useEffect(() => {
        if (firstSelect && secondSelect) {
            if(firstSelect.src === secondSelect.src) {
                setCartas(cartasVistas => {
                    return cartasVistas.map(carta => {
                        if(carta.src === firstSelect.src) {
                            return {...carta, matched: true}
                        } else {
                            return carta
                        }
                    })
                })
                sumarTurno()
            } else {
                console.log("No Match!")
                sumarTurno()
            }
        }
    }, [firstSelect, secondSelect])

    console.log(cartas)

    const sumarTurno = () => {
        setFirstSelect(null);
        setSecondSelect(null);
        setTurnos(turnos => turnos + 1);
    }

    return (
        <>
            <audio autoPlay={true} loop={true}><source type="audio/mp3" src={music}/></audio>
            <div className='mainUI'>
                <h1 id='titulo'>Bienvenido al juego de memoria!</h1>
                <button onClick={changeCartas} id="newgameBtn">Nueva Partida</button>
            </div>
            <div className='grid-cartas' >
                {cartas.map(carta => (
                    <Card key={carta.id} carta = {carta} chequeoCartas={chequeoCartas}/>
                ))}    
            </div>

        </>
    );
}