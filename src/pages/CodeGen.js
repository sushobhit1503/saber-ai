import React from "react";
import { Input } from "reactstrap";
import { Button, Tooltip } from "ui-neumorphism";
import { codeGen } from "../backend-calls/services";
import "../styles/ServicePage.css";

class CodeGen extends React.Component {
    constructor () {
        super ()
        this.state = {
            usecase: "",
            language: "",
            reply: "",
            mode: ""
        }
    }
    componentDidMount () {
        this.setState ({mode: localStorage.getItem("mode")})
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const submitCode = async () => {
            const { usecase, language } = this.state
            const res = await codeGen(usecase, language)
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
                <Tooltip bottom content={<div>Generate code by giving the usecase.</div>}>
                    <b>CODE GENERATION</b>
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>What Is Your Code's Purpose?</b></div>
                        <div className="page-card-label">Describe the usecase of your code</div>
                        <Input className={`input-${this.state.mode}`}  placeholder="eg. Swap 2 variables" onChange={onChange} value={this.state.usecase} name="usecase" />
                        <div className="page-card-label">Programming Language</div>
                        <Input className={`input-${this.state.mode}`} placeholder="eg. Python" onChange={onChange} value={this.state.language} name="language" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitCode} style={{marginTop: "1rem", width:"100%"}}>
                            Generate Code
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>See The Generated Code:</b></div>
                        <div className="page-card-label">Generated Code:</div>
                        <Input className={`input-${this.state.mode} mailBox`}  disabled={true} value={this.state.reply} type="textarea" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={copyToClipBoard} style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeGen