import React from "react";
import { Input, Label } from "reactstrap";
import Slider from "react-input-slider";
import { Card, Button, Tooltip, Switch } from "ui-neumorphism";
import "../styles/ServicePage.css";

class ColdEmail extends React.Component {
    constructor () {
        super ()
        this.state = {
            companyName: "",
            serviceDescription: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards",
            tone: ""
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const toggleAdvanced = () => {
            this.setState ({showAdvancedOptions: !this.state.showAdvancedOptions})
        }
        return (
            <div>
                <div className="page-heading">
                <Tooltip bottom content={<div>This is perfect for marketing agents or companies who need fresh ideas
                    daily on cold email content that is created by AI technology.  </div>}>
                    COLD EMAIL TEMPLATE
                </Tooltip>
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">ENTER THE SERVICES YOUR COMPANY PROVIDES</div>
                        <div className="page-card-label">Company Name</div>
                        <Input className="input" placeholder="eg. Saber AI" onChange={onChange} value={this.state.companyName} name="companyName" />
                        <div className="page-card-label">Services Provided</div>
                        <Input className="input mailBox" height={320} placeholder="eg. AI based email and content writing" onChange={onChange} value={this.state.serviceDescription} name="serviceDescription" type="textarea" />
                        <div>Describe the service you provide for the email content.</div>
                        <div onClick={toggleAdvanced} className="advanced-options">Advanced Options <i style={{padding:"5px"}} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch color="var(--success)" /> Use keyword optimization for SEO? <br /> 
                            <Label style={{margin:"10px"}}>Tone of the Email</Label>
                            <Input style={{width:"250px"}} onChange={onChange} value={this.state.tone} name="tone" className="input" type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input>
                            <Label style={{margin:"10px"}}>Specify number of words</Label> <br />
                            <Slider style={{marginLeft:"1.5rem", marginBottom: "1rem"}} axis="x" x={this.state.words} xstep={50} xmin={100} xmax={1000} />
                        </div>
                        <Button>
                            Generate Email
                        </Button>
                    </Card>
                    <div className="page-card">
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

export default ColdEmail