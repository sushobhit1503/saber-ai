import React from "react";
import { Card, TextField, Button, Tooltip } from "ui-neumorphism";
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
                <div className="page-heading">
                <Tooltip top content={<div>This is perfect for marketing agents or companies who need fresh ideas
                    daily on cold email content that is created by AI technology.  </div>}>
                    COLD EMAIL TEMPLATE
                </Tooltip>
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">ENTER THE SERVICES YOUR COMPANY PROVIDES</div>
                        <div className="page-card-label">Company Name</div>
                        <TextField placeholder="eg. Saber AI" onChange={onChange} value={this.state.companyName} name="companyName" />
                        <div className="page-card-label">Services Provided</div>
                        <TextField height={320} placeholder="eg. AI based email and content writing" onChange={onChange} value={this.state.serviceDescription} name="serviceDescription" />
                        <div>Describe the service you provide for the email content.</div>
                        <Button>
                            Generate Email
                        </Button>
                    </Card>
                    <div className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <TextField disabled={true} height={320} value={this.state.reply} />
                        <Button>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColdEmail