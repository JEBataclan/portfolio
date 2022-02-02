import "./Renders.css";

import { FaInstagramSquare } from 'react-icons/fa';

import Bewilderment from "../images/renders/bewilderment.png";
import Dice from "../images/renders/dice.png";
import Dragon from "../images/renders/dragon.png";
import DreamRoom from "../images/renders/dream-setup.png";
import ElFili from "../images/renders/elfili.jpg";
import KingdomKey from "../images/renders/kingdom-key.png";
import SagingSaba from "../images/renders/saging-na-saba.png";
import TGCoffee from "../images/renders/tg-coffee.png";

const Renders = () => {
    return (
        <div className="renders-container">
            <div className="container">
                <p className="header-title">Renders</p>
                <div className="renders-content">
                    <div className="renders">
                        <div style={{backgroundImage: `url(${Bewilderment})`}} className="render"/>
                        <div style={{backgroundImage: `url(${Dice})`}} className="render"/>
                        <div style={{backgroundImage: `url(${DreamRoom})`}} className="render"/>
                        <div style={{backgroundImage: `url(${Dragon})`}} className="render"/>
                        <div style={{backgroundImage: `url(${TGCoffee})`}} className="render"/>
                        <div style={{backgroundImage: `url(${ElFili})`}} className="render"/>
                    </div>
                    <div className="ig-container">
                        <a href="https://www.instagram.com/jebb_3d/" target="_blank"><FaInstagramSquare className="ig-logo"/></a>
                        <p>@jebb_3d</p>
                    </div>  
                </div>              
            </div>
        </div>
    );
}

export default Renders;