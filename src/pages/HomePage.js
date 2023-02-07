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
                        <div className="page-heading">WORLD CLASS AI WRITING SOLUTIONS</div>
                        <div style={{textAlign:"left"}} className="page-description home-page-desc">
                            Cut down the average emailing time from 28% to 9% ={`>`} Save 40 hours every month. <div style={{marginBottom: "1.5rem"}}></div>
                            Ultimate platform for all your content needs. <div style={{marginBottom: "1.5rem"}}></div>
                            Delivering expert copywriting, complete email automation, and SEO-optimised adverts generator  - all in one easy-to-use package. <div style={{marginBottom: "1.5rem"}}></div>
                            Supercharge your content with Saber!
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
                    <div style={{marginTop:"3rem"}} className="page-heading card">SERVICES</div>
                    <div className="home-page-services">
                        {ServiceData.map(eachElement => {
                            return (
                                <Card width={350} className="home-page-services-card">
                                    <CardContent>
                                        <H6 secondary style={{ marginBottom: '4px' }} >
                                            {eachElement.name}
                                        </H6>
                                        <Body2>
                                            {eachElement.description}
                                        </Body2>
                                    </CardContent>
                                    <Button>
                                        <a style={{textDecoration:"none"}} href={eachElement.link}>
                                            TRY NOW
                                        </a>
                                    </Button>
                                </Card>
                            )
                        })}
                    </div>
                </div>
                <div className="page-heading card">ASK ME ANYTHING</div>
                <div className="home-container1">
                    <div className="chat-image-container">
                        <img src={ChatIllustration} alt="saber" className="chat-image-container" />
                    </div>
                    <div className="chat-text-container">
                        <div className="page-heading">BEST RESPONSES</div>
                        <div style={{color:"var(--black-color)"}} className="page-description home-page-desc">
                            
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