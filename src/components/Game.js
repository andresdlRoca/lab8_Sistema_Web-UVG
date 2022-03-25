import React, { Component } from 'react';
import './Game.css';
import CartaBackside from '../assets/cardback.png';
import turtwig from '../assets/turtwig.png';
import pikachu from '../assets/pikachu.png';
import greninja from '../assets/greninja.png';
import rowlet from '../assets/rowlet.png';

class Game extends Component {
    constructor(props){
        super(props);

        //New Variables for item and text
        this.state = {
            cartas: [],
            turnos: 0,
        };
        //Handle change on data
        this.changeCartas = this.changeCartas.bind(this);
        //this.addTurnos = this.addTurnos.bind(this);
    }

    changeCartas($event){
        $event.preventDefault();
        const cardsSources = [
            { "src" : turtwig},
            { "src" : pikachu},
            { "src" : greninja},
            { "src" : rowlet}
        ]   
        //const cartasRandomized = [...cardsSources, ...cardsSources].sort(() => Math.random() - 0.5); //Array de cartas ya randomizadas
        //let cartas = this.state.cartas;
        let cartasUpdate = cardsSources;
        //cartasUpdate = cartasRandomized;
        
        this.setState({
            cartas: cartasUpdate,
        }/*, () => {
            console.log(this.state.cartas[0]['src']);
        }*/);
        console.log(this.state.cartas);
        
    }

    

    render() {
        return (
        <>
            <div className='mainUI'>
                <h1 id='titulo'>Bienvenido al juego de memoria!</h1>
                <button onClick={this.changeCartas} id="newgameBtn">Nueva Partida</button>
            </div>
            <div className='grid-cartas'>
                    <div className="carta">
                        <div>
                            <img className="frontside" src={this.state.cartas[0]}/>
                            <img className="backside" src={CartaBackside}/>
                        </div>
                    </div>
                </div>

        </>

        );
        
    }

}

export default Game;