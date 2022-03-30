import './VictoryScreen.css';
import React, { useState, useEffect } from "react";
import victoryroyale from '../assets/victoryroyale.gif';
import ludicolodancing from '../assets/ludicolodancing.gif';

export default function VictoryScreen({ visible }) {

    const seleccionCarta = () => {
        if (visible === false) {
            
        } else if (visible === true) {
            
        }
    }

    return (
        <div className="screen" >
            <img className='victoryroyale' src={victoryroyale} />
            <br></br>
            <img className='ludicolodancing' src={ludicolodancing} />
        </div>
    );
}