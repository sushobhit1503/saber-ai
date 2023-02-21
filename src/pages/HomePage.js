import React from "react"
import HomeIllustration from "../assets/home.gif"
import ChatIllustration from "../assets/chat.gif"
import "../styles/HomePage.css"
import "../styles/ServicePage.css"
import { Button, CardContent, Body2, H6 } from "ui-neumorphism"
import ServiceData from "../data/Data Files.json"
import ReactPlayer from "react-player/youtube"

class HomePage extends React.Component {
    constructor () {
        super ()
        this.state = {
            mode: ""
        }
    }
    componentDidMount () {
        this.setState ({mode: localStorage.getItem("mode")})
    }
    render () {
        return (
            <div>
                <div className={`home-container-${this.state.mode}`}>
                    <div className="home-page-illustration">
                        <img src={HomeIllustration} alt="saber" className="home-page-illustration" />
                    </div>
                    <div style={{color:"var(--white-color)"}}>
                        <div className="page-heading page-heading-home">WORLD CLASS AI WRITING SOLUTIONS</div>
                        <div style={{textAlign:"left"}} className="page-description home-page-desc">
                            Cut down the average emailing time from 28% to 9% ={`>`} Save 40 hours every month. <div style={{marginBottom: "0.75rem"}}></div>
                            Ultimate platform for all your content needs. <div style={{marginBottom: "0.75rem"}}></div>
                            Delivering expert copywriting, complete email automation, and SEO-optimised adverts generator  - all in one easy-to-use package. <div style={{marginBottom: "0.75rem"}}></div>
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
                    <div style={{marginTop:"3rem"}} className={`page-heading card-${this.state.mode}`}>SERVICES</div>
                    <div className="home-page-services">
                        {ServiceData.map(eachElement => {
                            return (
                                <div className={`home-page-services-card card-${this.state.mode}`}>
                                    <div>
                                        <CardContent style={{margin:"0px"}}>
                                            <H6 secondary style={{ marginBottom: '4px' }} >
                                                {eachElement.name}
                                            </H6>
                                            <Body2>
                                                {eachElement.description}
                                            </Body2>
                                        </CardContent>
                                    </div>
                                    <div>
                                        <Button>
                                            <a style={{textDecoration:"none"}} href={eachElement.link}>
                                                TRY NOW
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={`page-heading card-${this.state.mode}`}>ASK ME ANYTHING</div>
                <div className="home-container1">
                    <div className="chat-image-container">
                        <img src={ChatIllustration} alt="saber" className="chat-image-container" />
                    </div>
                    <div className="chat-text-container">
                        <div className="page-heading">BEST RESPONSES</div>
                        <div style={{color:"var(--black-color)"}} className="page-description home-page-desc">
                            AI at Your Fingertips with Ask Me Anything. Get accurate answers, fast. 
                            Experience the convenience of a personal AI search engine. Chat Your Way to Knowledge!
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
                <div className={`page-heading card-${this.state.mode}`}>UPGRADE TO PREMIUM</div>
                <div className="home-container1">
                    <div className="chat-text-container">
                        <div style={{color:"var(--black-color)"}} className="page-description home-page-desc">
                            Premium Members get access to our magical browser and Outlook extensions. 
                            Compose and Reply to emails in one click! Right from your inbox.
                        </div>
                        <div className="home-action-button">
                            <Button>
                                <a style={{textDecoration:"none"}} href="/payments">
                                    TRY NOW
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="chat-image-container">
                        <ReactPlayer className="video-file" url="https://youtu.be/cJbyy1R7k-o" playing loop controls volume={0} />
                    </div> 
                </div>
            </div>
        )
    }
}

export default HomePage