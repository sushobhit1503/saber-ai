import React from "react";
import { Button, Input } from "reactstrap";
import "../styles/ServicePage.css";

class CodeGen extends React.Component {
    constructor () {
        super ()
        this.state = {
            usecase: "",
            language: "",
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
                <div className="page-heading">CODE GENERATION</div>
                <div className="page-description">
                    Generate code by giving the usecase.
                </div>
                <div className="page-container">
                    <div className="page-card">
                        <div className="page-card-heading">WHAT IS YOUR CODE's PURPOSE?</div>
                        <div className="page-card-label">Describe the usecase of your code</div>
                        <Input placeholder="eg. Swap 2 variables" onChange={onChange} value={this.state.usecase} name="usecase" />
                        <div className="page-card-label">Programming Language</div>
                        <Input placeholder="eg. Python" onChange={onChange} value={this.state.language} name="language" />
                        <Button className="page-action-buttons">
                            Generate Code
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

export default CodeGen