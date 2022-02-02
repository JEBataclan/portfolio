import "./About.css";

import FastLearnerTrait from "../images/fastlearner-trait.png";
import TeamWorkTrait from "../images/teamwork-trait.png";
import CommunicationTrait from "../images/communication-trait.png";
import TUPLogo from "../images/tup-logo.png";
import GEARLogo from "../images/gear-logo.png";

const About = () => {
    return (
        <div className="about-container">
            <div className="container">
                <p className="header-title">About Me</p>
                <div className="about-contents">
                    <div className="affiliations">
                        <div className="affiliation">
                            <div className="affiliation-content">
                                <img src={TUPLogo} alt="Technological University of the Philippines" className="affiliation-logo"/>
                                <p>
                                    Currently a 4th year student at TUP-Manila, taking Bachelor of Science in Computer Science. Hoping to be a game developer, just not now because of hardware limitations.
                                </p>
                            </div>
                        </div>

                        <div className="affiliation">
                            <div className="affiliation-content">
                                <img src={GEARLogo} alt="Gaming & Esports Association Ring" className="affiliation-logo"/>
                                <p>
                                    I am the one-man dev. team of TUP-Manila Gaming & Esports Association Ring (GEAR), AKA, the guy in the chair.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="traits">
                        <div className="trait">
                            <div className="trait-contents">
                                <img src={FastLearnerTrait} alt="Fast Learner" className="trait-icon"/>
                                <hr className="icon-hr"/>
                                <p>
                                    <i>Quick Learner</i>. With years of gaming, this has taught me to be versatile and adaptable every time at every moment. This has enabled me to master or at least grasp new concepts quickly and efficiently.
                                </p>
                            </div>
                        </div>

                        <div className="trait">
                            <div className="trait-contents">
                                <img src={CommunicationTrait} alt="Good Communication" className="trait-icon"/>
                                <hr className="icon-hr"/>
                                <p>
                                    <i>Extrovert</i>. I love being exposed to different communities, talking to different people, because it enables me to understand different personalities and adjust my approach on how I will open up something to them.
                                </p>
                            </div>
                        </div>

                        <div className="trait">
                            <div className="trait-contents">
                                <img src={TeamWorkTrait} alt="Team Player" className="trait-icon"/>
                                <hr className="icon-hr"/>
                                <p>
                                    <i>Team Player.</i> Again, because of gaming, I was more inclined in games that required teamwork to win. This allowed me to work very well in groups even in real life and enjoy working closely with them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;