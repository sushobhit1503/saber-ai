import React from "react";
import { Button, Input } from "reactstrap";
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
                <div className="page-heading">GENERATE TWEETS</div>
                <div className="page-description">
                    Start generating tweet ideas with hashtags for your online social media campaigns on twitter.
                    Create endless unique tweet ideas, no more writers block.
                </div>
                <div className="page-container">
                    <div className="page-card">
                        <div className="page-card-heading">WHAT IS YOUR TWEET ABOUT?</div>
                        <div className="page-card-label">Tweet Prompt</div>
                        <Input placeholder="eg. CRM Software" onChange={onChange} value={this.state.tweet} name="tweet" />
                        <div>Enter topic or subject you would like to generate tweets for.</div>
                        <Button className="page-action-buttons">
                            Get Recommendations
                        </Button>
                    </div>
                    <div className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input disabled={true} className="mailBox" value={this.state.reply} />
                        <Button className="page-action-buttons">
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenTweets