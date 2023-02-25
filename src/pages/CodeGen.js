import React from "react";
import { Input, Spinner } from "reactstrap";
import { Button, Tooltip, Alert } from "ui-neumorphism";
import { codeGen } from "../backend-calls/services";
import "../styles/ServicePage.css";

class CodeGen extends React.Component {
    constructor() {
        super()
        this.state = {
            usecase: "",
            language: "",
            reply: "",
            mode: "",
            isLoading: false,
            alert: ""
        }
    }
    componentDidMount() {
        this.setState({ mode: localStorage.getItem("mode") })
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const submitCode = async () => {
            const { usecase, language } = this.state
            this.setState({ isLoading: true })
            const res = await codeGen(usecase, language)
            if (res.error) {
                this.setState({ alert: res.error })
                setTimeout(() => this.setState({ alert: "" }), 3000)
            } else {
                this.setState({ reply: res.data, isLoading: false })
            }
        }
        const copyToClipBoard = () => {
            navigator.clipboard.writeText(this.state.reply)
        }
        return (
            <div>
                <div className="page-heading">
                    <Tooltip dark={this.state.mode === "dark" ? true : false} bottom content={<div>Generate code by giving the usecase.</div>}>
                        <b>CODE GENERATION</b>
                    </Tooltip>
                </div>
                <div style={{ margin: "auto", width: "max-content" }}>
                    {this.state.alert &&
                        <Alert dark={this.state.mode === "dark" ? true : false} type="error">
                            {this.state.alert}
                        </Alert>}
                </div>
                <div className="page-container">
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>What Is Your Code's Purpose?</b></div>
                        <div className="page-card-label">Describe the usecase of your code</div>
                        <Input className={`input-${this.state.mode}`} style={{ height: "20rem" }} placeholder="eg. Swap 2 variables" onChange={onChange} value={this.state.usecase} name="usecase" type="textarea" />
                        <div className="page-card-label">Programming Language</div>
                        <Input className={`input-${this.state.mode}`} placeholder="eg. Python" onChange={onChange} value={this.state.language} name="language" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitCode} style={{ marginTop: "1rem", width: "100%" }}>
                            {this.state.isLoading ? <Spinner /> : "Generate Code"}
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>See The Generated Code:</b></div>
                        <div className="page-card-label">Generated Code:</div>
                        <Input className={`input-${this.state.mode}`} style={{ height: "30rem" }} value={this.state.reply} type="textarea" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={copyToClipBoard} style={{ marginTop: "1rem" }}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeGen