import './Card.css';
import React, { useState, useEffect } from "react";
import CartaBackside from '../assets/cardback.png';

export default function Card({ carta, chequeoCartas }) {

    const seleccionCarta = () => {
        chequeoCartas(carta)
    }


    return (
        <div className="carta" >
            <div>
                <img className="frontside" src={carta.src}/>
                <img className="backside" src={CartaBackside} onClick={seleccionCarta}/>
            </div>
        </div>
    );
}