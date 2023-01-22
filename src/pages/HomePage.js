import React from "react"
import HomeIllustration from "../assets/home.gif"
import ChatIllustration from "../assets/chat.gif"
import "../styles/HomePage.css"
import "../styles/ServicePage.css"
import { Button } from "reactstrap"
import ServiceData from "../data/Data Files.json"

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <div className="home-container">
                    <div>
                        <img src={HomeIllustration} alt="saber" />
                    </div>
                    <div>
                        <div className="page-heading">WORLD's BEST <br /> AI-CONTENT WRITING</div>
                        <div className="page-description home-page-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur.
                        </div>
                        <div className="home-action-button">
                            <Button className="page-action-buttons">
                                TRY NOW
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="home-page-services-container">
                    <div className="page-heading">SERVICES</div>
                    <div className="home-page-services">
                        {ServiceData.map(eachElement => {
                            return (
                                <div className="home-page-services-card">
                                    <div>
                                        {eachElement.name}
                                    </div>
                                    <div>
                                        {eachElement.description}
                                    </div>
                                    <Button className="page-action-buttons1">
                                        TRY NOW
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="page-heading">ASK ME ANYTHING</div>
                <div className="home-container">
                    <div className="chat-image-container">
                        <img src={ChatIllustration} alt="saber" />
                    </div>
                    <div className="chat-text-container">
                        <div className="page-heading">BEST RESPONSES</div>
                        <div className="page-description home-page-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur.
                        </div>
                        <div className="home-action-button">
                            <Button className="page-action-buttons">
                                TRY NOW
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage