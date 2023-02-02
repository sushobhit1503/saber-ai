import React from "react"
import HomeIllustration from "../assets/home.gif"
import ChatIllustration from "../assets/chat.gif"
import "../styles/HomePage.css"
import "../styles/ServicePage.css"
import { Button, Card, CardContent, Body2, H6 } from "ui-neumorphism"
import ServiceData from "../data/Data Files.json"

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <div className="home-container">
                    <div>
                        <img src={HomeIllustration} alt="saber" className="home-page-illustration" />
                    </div>
                    <div style={{color:"var(--white-color)"}}>
                        <div className="page-heading">WORLD's BEST AI-CONTENT WRITING</div>
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
                            <Button>
                                <a style={{textDecoration:"none"}} href="/email-gen">
                                    TRY NOW
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="home-page-services-container">
                    <div className="page-heading">SERVICES</div>
                    <div className="home-page-services">
                        {ServiceData.map(eachElement => {
                            return (
                                <Card width={300} className="home-page-services-card">
                                    <CardContent>
                                        <H6 secondary style={{ marginBottom: '4px' }} >
                                            {eachElement.name}
                                        </H6>
                                        <Body2>
                                            {eachElement.description}
                                        </Body2>
                                        <Button>
                                            <a style={{textDecoration:"none"}} href={eachElement.link}>
                                                TRY NOW
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
                <div className="page-heading">ASK ME ANYTHING</div>
                <div className="home-container1">
                    <div className="chat-image-container">
                        <img src={ChatIllustration} alt="saber" className="chat-image-container" />
                    </div>
                    <div className="chat-text-container">
                        <div className="page-heading">BEST RESPONSES</div>
                        <div style={{color:"var(--black-color)"}} className="page-description home-page-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor in 
                            reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur.
                        </div>
                        <div className="home-action-button">
                            <Button>
                                <a style={{textDecoration:"none"}} href="/ask-me-anything">
                                    TRY NOW
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage