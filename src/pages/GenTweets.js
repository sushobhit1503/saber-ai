import React from "react";
import { Input } from "reactstrap";
import { Button, Tooltip } from "ui-neumorphism";
import { tweetGen } from "../backend-calls/services";
import "../styles/ServicePage.css";

class GenTweets extends React.Component {
    constructor () {
        super ()
        this.state = {
            tweet: "",
            reply: ""
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const submitTweet = async () => {
            const { tweet } = this.state
            const res = await tweetGen(tweet)
            if(res.error){
                alert(res.msg)
            }else{
                this.setState ({reply: res.data})
            }
        }
        const copyToClipBoard = () => {
            navigator.clipboard.writeText(this.state.reply)
        }
        return (
            <div>
                <div className="page-heading">
                <Tooltip bottom content={<div>Start generating tweet ideas with hashtags for your online social media campaigns on twitter.
                    Create endless unique tweet ideas, no more writers block.</div>}>
                    <b>GENERATE TWEETS</b>
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className="page-card card">
                        <div className="page-card-heading"><b>What is your tweet about?</b></div>
                        <div className="page-card-label">Tweet Prompt</div>
                        <Input className="input" placeholder="eg. CRM Software" onChange={onChange} value={this.state.tweet} name="tweet" />
                        <div>Enter topic or subject you would like to generate tweets for.</div>
                        <Button onClick={submitTweet} style={{marginTop: "1rem", width:"100%"}}>
                            Get Recommendations
                        </Button>
                    </div>
                    <div className="page-card card">
                        <div className="page-card-heading"><b>See the tweet here:</b></div>
                        <div className="page-card-label">Generated tweet</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button onClick={copyToClipBoard} style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenTweets