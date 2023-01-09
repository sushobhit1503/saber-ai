import React from "react";
import { Button, Input } from "reactstrap";
import "../styles/ServicePage.css";

class ColdEmail extends React.Component {
    constructor () {
        super ()
        this.state = {
            companyName: "",
            serviceDescription: "",
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
                <div className="page-heading">COLD EMAIL TEMPLATE</div>
                <div className="page-description">
                    This is perfect for marketing agents or companies who need fresh ideas
                    daily on cold email content that is created by AI technology.  
                </div>
                <div className="page-container">
                    <div className="page-card">
                        <div className="page-card-heading">ENTER THE SERVICES YOUR COMPANY PROVIDES</div>
                        <div className="page-card-label">Company Name</div>
                        <Input placeholder="eg. Saber AI" onChange={onChange} value={this.state.companyName} name="companyName" />
                        <div className="page-card-label">Services Provided</div>
                        <Input className="mailBox" placeholder="eg. AI based email and content writing" onChange={onChange} value={this.state.serviceDescription} name="serviceDescription" />
                        <div>Describe the service you provide for the email content.</div>
                        <Button className="page-action-buttons">
                            Generate Email
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

export default ColdEmail