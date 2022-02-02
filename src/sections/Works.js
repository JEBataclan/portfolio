import "./Works.css";
import { FaPlayCircle, FaGithub } from 'react-icons/fa';

import LoLProject from "../images/lol-project.png";
import T4GProject from "../images/t4g-project.PNG";
import PayrollSystemProject from "../images/payrollsystem-project.png"
import PAVGAProject from "../images/pavga-project.jpg"
import ValorantProject from "../images/valorant-project.png"
import WildRiftProject from "../images/wildrift-project.png"

const Works = () => {
    return (
        <div className="works-container" id="Works">
            <div className="container">
                <p className="header-title">My Recent Works</p>
                <div className="works-contents">
                    <div className="work">
                        <img src={ValorantProject} className="project-img" alt="Valorant Manually-controlled Overlay"/>
                        <div className="on-top">
                            <p className="work-title">Valorant Manually-controlled Overlay</p>

                            <p className="description">A manually-controlled map veto & agent selection overlay for Valorant tournaments.</p>

                            <div className="redirectory-logos-container">
                                <a href="https://github.com/JEBataclan/valorant-overlay" target="_blank"><FaGithub className="redirectory-logo"/></a>
                                <a href="https://youtu.be/k1-NOQmAEiY" target="_blank"><FaPlayCircle className="redirectory-logo"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <img src={WildRiftProject} className="project-img" alt="Wild Rift Manually-controlled Overlay"/>
                        <div className="on-top">
                            <p className="work-title">Wild Rift Manually-controlled Overlay</p>

                            <p className="description">A manually-controlled champion picks & bans overlay for Wild Rift tournaments.</p>

                            <div className="redirectory-logos-container">
                                <a href="https://github.com/JEBataclan/GGWR-Smart-Overlay" target="_blank"><FaGithub className="redirectory-logo"/></a>
                                <a href="https://youtu.be/LLb0xMhqcrQ" target="_blank"><FaPlayCircle className="redirectory-logo"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <img src={LoLProject} className="project-img" alt="League of Legends Smart Overlay"/>
                        <div className="on-top">
                            <p className="work-title">League of Legends Smart Overlay</p>

                            <p className="description">A smart champion picks & bans overlay for League of Legends tournaments. Credits to RCVolus.</p>

                            <div className="redirectory-logos-container">
                                <a href="https://github.com/JEBataclan/lol-pick-ban-ui" target="_blank"><FaGithub className="redirectory-logo"/></a>
                                <a href="https://youtu.be/owZ0fw8Ekyg" target="_blank"><FaPlayCircle className="redirectory-logo"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <img src={PAVGAProject} className="project-img" alt="Pokemon Manually-controlled Overlay"/>
                        <div className="on-top">
                            <p className="work-title">Pokemon Manually-controlled Overlay</p>

                            <p className="description">A manually-controlled overlay for Pokemon Sword & Shield tournaments. Exclusively for PAVGA.</p>

                            <div className="redirectory-logos-container">
                                <a href="https://twitter.com/imjjkun/status/1402251414630395905" target="_blank"><FaPlayCircle className="redirectory-logo"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <img src={PayrollSystemProject} className="project-img" alt="TUP Payroll System"/>
                        <div className="on-top">
                            <p className="work-title">TUP Payroll System</p>

                            <p className="description">Role: Front-end developer. Our final project for our Software Engineering 2 className.</p>

                            <div className="redirectory-logos-container">
                                <a href="https://github.com/JEBataclan/payroll-system" target="_blank"><FaGithub className="redirectory-logo"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <img src={T4GProject} className="project-img" alt="T4G"/>
                        <div className="on-top">
                            <p className="work-title">T4G</p>

                            <p className="description">A 2-player 2D platform game wherein you need to catch or run from the opposing player.</p>

                            <div className="redirectory-logos-container">
                                <a href="https://github.com/JEBataclan/t4g" target="_blank"><FaGithub className="redirectory-logo"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;