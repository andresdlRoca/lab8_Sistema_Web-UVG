import React, { useState, useEffect, useRef } from "react";
import './Game.css';
import CartaBackside from '../assets/cardback.png';
import turtwig from '../assets/turtwig.png';
import pikachu from '../assets/pikachu.png';
import greninja from '../assets/greninja.png';
import rowlet from '../assets/rowlet.png';
import infernape from '../assets/infernape.png';
import cyndaquil from '../assets/cyndaquil.png';
import ludicolo from '../assets/ludicolo.png';
import mew from '../assets/mew.png';
import Card from "./Card";
import bgmusic from "../assets/music.mp3";
import victorymusic from "../assets/victorymusic.mp3";
import VictoryScreen from "./VictoryScreen";

export default function GameHooks() {
    const cardsSources = [
        { "src" : turtwig, matched: false},
        { "src" : pikachu, matched: false},
        { "src" : greninja, matched: false},
        { "src" : rowlet, matched: false},
        { "src" : infernape, matched: false},
        { "src" : cyndaquil, matched: false},
        { "src" : ludicolo, matched: false},
        { "src" : mew, matched: false}
    ]   

    const [cartas, setCartas] = useState([{}]);
    const [reset, setReset] = useState(false);
    const [turnos, setTurnos] = useState();
    const [firstSelect, setFirstSelect] = useState(null);
    const [secondSelect, setSecondSelect] = useState(null);
    const [desactivarClick, setDesactivar] = useState(false);
    const [victoryCond, setVictory] = useState(false);
    const [audio, setAudio] = useState("");
    const audioRef = useRef();

    //Randomizador de cartas
    function changeCartas($event) {
        actualizarMusica(bgmusic);
        setVictory(false)
        const cartasRandomized = [...cardsSources, ...cardsSources].sort(() => Math.random() - 0.5).map((carta) => ({ ...carta, id: Math.random() })); //Array de cartas ya randomizadas
        
        setFirstSelect(null)
        setSecondSelect(null)
        setCartas(cartasRandomized);
        setTurnos(0)
        setReset(true);
        setTimeout(() => setReset(false), 500);
    }

    //Chequeo de cartas
    const chequeoCartas = (carta) => {
        firstSelect ? setSecondSelect(carta) : setFirstSelect(carta)

    }

    useEffect(() => {
        chequeoVictoria();
        if (firstSelect && secondSelect) {
            setDesactivar(true)
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
                setTimeout(() => sumarTurno(), 1000)
            }
        }
    }, [firstSelect, secondSelect])

    //Chequeo de las condiciones de victoria del juego
    const chequeoVictoria = () => {
        
        let resultado = cartas.every((i) => {
            return i.matched === true
        })
        
        if (resultado === true) {
            setTimeout(() => setVictory(true), 1000)
            actualizarMusica(victorymusic)
            console.log("Everything is matched!")
        } 
    }

    //Suma los turnos luego de completar la seleccion de dos cartas
    const sumarTurno = () => {    
        setFirstSelect(null);
        setSecondSelect(null);
        setTurnos(turnos => turnos + 1);
        setDesactivar(false);
    }

    useEffect(() => {
        changeCartas()
    }, [])

    //Manejo de cambio de audio de fondo
    const actualizarMusica = (src) => {
        setAudio(src)
        if(audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }

    }

    return (
        <>
            <div className={victoryCond ? "victoryVisible" : "victoryInvisible"}>
                <VictoryScreen  />
            </div>
            <audio className="audiosource" autoPlay={true} loop={true} ref={audioRef}><source type="audio/mp3" src={audio}/></audio>
            <div className='mainUI'>
                <h1 id='titulo'>Bienvenido al juego de memoria!</h1>
                <button onClick={changeCartas} id="newgameBtn">Nueva Partida</button>
                <h3 id='Turnos'>Turno: {turnos}</h3>
            </div>
            <div className='grid-cartas' >
                {cartas.map(carta => (
                    <Card key={carta.id} carta = {carta} chequeoCartas={chequeoCartas} flip={carta === firstSelect || carta === secondSelect || carta.matched} flipreset = {reset === true} desactivarclick={desactivarClick}/>
                ))}    
            </div>

        </>
    );
}