import React from "react";
import { Button, Input } from "reactstrap";
import "../styles/ServicePage.css";

class SocialMedia extends React.Component {
    constructor () {
        super ()
        this.state = {
            title: "",
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
                <div className="page-heading">SOCIAL MEDIA ADVERTS</div>
                <div className="page-description">
                    Looking for some creative social media advert ideas for your online
                    campaigns on Facebook, Twitter or Instagram? We got you.
                </div>
                <div className="page-container">
                    <div className="page-card">
                        <div className="page-card-heading">WHAT IS YOUR AD CAMPAIGN ABOUT?</div>
                        <div className="page-card-label">Subject or Title</div>
                        <Input placeholder="eg. Samsung S12 Mobile Phone" onChange={onChange} value={this.state.title} name="title" />
                        <div>Describe the subject or title for the ad campaign.</div>
                        <Button className="page-action-buttons">
                            Generate Ad
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

export default SocialMedia