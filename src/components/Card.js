import './Card.css';
import React, { useState, useEffect } from "react";
import CartaBackside from '../assets/cardback.png';

export default function Card({ carta, chequeoCartas, flip, flipreset, desactivarclick }) {

    const seleccionCarta = () => {
        if (!desactivarclick) {
            chequeoCartas(carta)
        } 
    }


    return (
        <div className="carta" >
            <div className={flip ? "flip" : ""} >
                <img className="frontside" src={carta.src}/>
                <div className={flipreset ? "flipreset" : ""}>
                    <img className="backside" src={CartaBackside} onClick={seleccionCarta}/>
                </div>
            </div>
        </div>
    );
}