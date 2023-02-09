import React from "react";
import { Input } from "reactstrap";
import { Card, Button, Tooltip } from "ui-neumorphism";
import "../styles/ServicePage.css";

class GenTweets extends React.Component {
    constructor () {
        super ()
        this.state = {
            tweet: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards"
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        return (
            <div>
                <div className="page-heading">
                <Tooltip bottom content={<div>Start generating tweet ideas with hashtags for your online social media campaigns on twitter.
                    Create endless unique tweet ideas, no more writers block.</div>}>
                    GENERATE TWEETS
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className="page-card card">
                        <div className="page-card-heading">WHAT IS YOUR TWEET ABOUT?</div>
                        <div className="page-card-label">Tweet Prompt</div>
                        <Input className="input" placeholder="eg. CRM Software" onChange={onChange} value={this.state.tweet} name="tweet" />
                        <div>Enter topic or subject you would like to generate tweets for.</div>
                        <Button style={{marginTop: "1rem", width:"100%"}}>
                            Get Recommendations
                        </Button>
                    </div>
                    <div className="page-card card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenTweets