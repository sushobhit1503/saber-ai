import React from "react";
import { Input, Label } from "reactstrap";
import Slider from "react-input-slider";
import { Card, Button, Tooltip, Switch} from "ui-neumorphism";
import "../styles/ServicePage.css";

class EmailGen extends React.Component {
    constructor () {
        super ()
        this.state = {
            previousMail: "",
            bulletPoints: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards",
            showAdvancedOptions: false,
            tone: "",
            words: 200
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
                <Tooltip bottom content={<div>The Saber writing will allow you to generate full fledged 
                    emails out of bullet points using GPT3’ s advance text 
                    generation AI. </div>}>
                        EMAIL GENERATION
                </Tooltip>
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">ENTER THE INPUT HERE</div>
                        <div className="page-card-label">Enter Previous Email (optional)</div>
                        <Input className="input mailBox" placeholder="Dear Saber, Thank you for writing to us ...." onChange={onChange} value={this.state.previousMail} name="previousMail" type="textarea" />
                        <div className="page-card-label">Enter Bullet Points</div>
                        <Input className="input" placeholder="eg. Meeting, 8 am, tomorrow" onChange={onChange} value={this.state.bulletPoints} name="bulletPoints" />
                        <div onClick={toggleAdvanced} className="advanced-options">Advanced Options <i style={{padding:"5px"}} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch color="var(--success)" /> Is this a sales email? <br />
                            <Switch color="var(--success)" /> Use keyword optimization for SEO? <br /> 
                            <Label style={{margin:"10px"}}>Tone of the Email</Label>
                            <Input onChange={onChange} name="tone" value={this.state.tone} style={{margin:"0px 0px 20px 10px", width:"250px"}} className="input" type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input>
                            <Label style={{margin:"10px"}}>Specify number of words</Label> <br />
                            <Slider style={{marginLeft:"1.5rem"}} axis="x" x={this.state.words} xstep={50} xmin={100} xmax={1000} />
                        </div>
                        <Button style={{marginTop: "1rem", width:"100%"}}>
                            Generate Email
                        </Button>
                    </Card>
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input className="input mailBox" disabled={true} value={this.state.reply} type="textarea" />
                        <Button style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default EmailGen