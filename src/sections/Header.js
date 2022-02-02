import "./Header.css";
import DreamRoom from "../images/render-day.PNG";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header-container">
            <div className="container">
                <div className="header-contents">
                    <div className="introductions">
                        <p className="intro-line-1">Hi, I'm Jan Erickson Bataclan!</p>
                        <p className="intro-line-2">I do programming and 3D rendering.</p>
                        <div className="clickables-container">
                            <a href="" target="_blank"><button type="button" className="button fill">Resume</button></a>
                            <div className="buttons break"></div> 
                            <a href="#Works"><button type="button" className="button outline">Works</button></a>
                            <a href="https://www.instagram.com/jebb_3d/" target="_blank"><button type="button" className="button outline">Renders</button></a>
                            <div className="logos break"></div> 
                            <a href="https://github.com/JEBataclan/" target="_blank"><FaGithub className="logo"/></a>
                            <a href="https://www.linkedin.com/in/jan-erickson-bataclan-88a445181/" target="_blank"><FaLinkedin className="logo"/></a>
                        </div>
                    </div>

                    <img src={DreamRoom} className="dream-room" alt="Dream Room"/>
                </div>
            </div>
        </div>
    );
}

export default Header;