import "./Footer.css";

import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="footer-contents">
                    <div class="icon-links">
                        <a href="https://www.facebook.com/JEBataclan/" target="_blank"><FaFacebookSquare className="icon-link"/></a>
                        <a href="https://twitter.com/JEBataclan" target="_blank"><FaTwitterSquare className="icon-link"/></a>
                        <a href="https://www.instagram.com/jebataclan" target="_blank"><FaInstagramSquare className="icon-link"/></a>
                        <a href="https://www.youtube.com/channel/UCr0Wy5RFDnMJbxjsiDCdgOg" target="_blank"><FaYoutube className="icon-link"/></a>
                        <a href="https://www.linkedin.com/in/jan-erickson-bataclan-88a445181/" target="_blank"><FaLinkedin className="icon-link"/></a>
                        <a href="https://github.com/JEBataclan/" target="_blank"><FaGithub className="icon-link"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer