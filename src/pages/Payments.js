import React from "react";
import { Input } from "reactstrap";
import { Card, Button} from "ui-neumorphism";
import "../styles/ServicePage.css";

class Payments extends React.Component {
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
                    PLANS
                </div>
                <div style={{display:"flex"}}>
                    <Card style={{textAlign:"center"}} className="page-card">
                        <div className="page-card-heading">FREE PLAN</div>
                        <div className="page-card-label">Tweet Prompt</div>
                        <Input className="input" placeholder="eg. CRM Software" onChange={onChange} value={this.state.tweet} name="tweet" />
                        <div>Enter topic or subject you would like to generate tweets for.</div>
                        <Button>
                            Get Recommendations
                        </Button>
                    </Card>
                    <Card style={{textAlign:"center"}}  className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button>
                            Copy
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Payments