import React from "react";
import { Card, TextField, Button, Tooltip, Switch} from "ui-neumorphism";
import "../styles/ServicePage.css";

class EmailGen extends React.Component {
    constructor () {
        super ()
        this.state = {
            previousMail: "",
            bulletPoints: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards",
            showAdvancedOptions: false
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
                <Tooltip top content={<div>The Saber writing will allow you to generate full fledged 
                    emails out of bullet points using GPT3’ s advance text 
                    generation AI. </div>}>
                        EMAIL GENERATION
                </Tooltip>
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">ENTER THE INPUT HERE</div>
                        <div className="page-card-label">Enter Previous Email (optional)</div>
                        <TextField height={320} placeholder="Dear Saber, Thank you for writing to us ...." onChange={onChange} value={this.state.previousMail} name="previousMail" />
                        <div className="page-card-label">Enter Bullet Points</div>
                        <TextField style={{width:"100%"}} placeholder="eg. Meeting, 8 am, tomorrow" onChange={onChange} value={this.state.bulletPoints} name="bulletPoints" />
                        <div onClick={toggleAdvanced} className="advanced-options">Advanced Options <i className="fa fa-down-arrow"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch color="var(--success)" /> Is this a sales email? <br />
                            <Switch color="var(--success)" /> Use keyword optimization for SEO?
                        </div>
                        <Button>
                            Generate Email
                        </Button>
                    </Card>
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <TextField disabled={true} height={320} value={this.state.reply} />
                        <Button>
                            Copy
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default EmailGen