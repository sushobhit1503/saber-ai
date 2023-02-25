import React from "react";
import { Input, Label, Spinner } from "reactstrap";
import Slider from "react-input-slider";
import { Button, Tooltip, Switch, Alert } from "ui-neumorphism";
import { emailGen } from "../backend-calls/services"
import "../styles/ServicePage.css";

class EmailGen extends React.Component {
    constructor() {
        super()
        this.state = {
            previousMail: "",
            bulletPoints: "",
            reply: "",
            showAdvancedOptions: false,
            sales: false,
            seo: false,
            tone: "",
            words: 150,
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
        const onChangeSales = (event) => {
            this.setState({ sales: event.checked })
        }
        const onChangeSeo = (event) => {
            this.setState({ seo: event.checked })
        }
        const toggleAdvanced = () => {
            this.setState({ showAdvancedOptions: !this.state.showAdvancedOptions })
        }
        const submitEmail = async () => {
            this.setState({ isLoading: true })
            const { previousMail, bulletPoints, sales, seo, tone, words } = this.state
            const res = await emailGen(previousMail, bulletPoints, sales, words, seo, tone)
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
                    <Tooltip dark={this.state.mode === "dark" ? true : false} bottom content={<div>The Saber writing will allow you to generate full fledged
                        emails out of bullet points using GPT3’ s advance text
                        generation AI. </div>}>
                        <b> EMAIL GENERATION </b>
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
                        <div className="page-card-heading"><b>Enter The Email Details: </b></div>
                        <div className="page-card-label">Enter previous email reply (Optional)</div>
                        <Input className={`input-${this.state.mode}`} style={{ height: "20rem" }} placeholder="Dear Saber, Thank you for writing to us ...." onChange={onChange} value={this.state.previousMail} name="previousMail" type="textarea" />
                        <div className="page-card-label">Enter Bullet Points</div>
                        <Input className={`input-${this.state.mode}`} style={{ height: "12rem" }} placeholder="eg. Meeting, 8 am, tomorrow" onChange={onChange} value={this.state.bulletPoints} name="bulletPoints" type="textarea" />
                        <div onClick={toggleAdvanced} className={`advanced-options box-shadow-${this.state.mode}`} style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", width: "max-content" }}>Advanced Options <i style={{ padding: "5px" }} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch dark={this.state.mode === "dark" ? true : false} onChange={onChangeSales} color="var(--success)" value={this.state.sales} /> Is this a Sales Email? <br />
                            <Switch dark={this.state.mode === "dark" ? true : false} onChange={onChangeSeo} color="var(--success)" value={this.state.seo} /> Use keyword optimization for SEO? <br />
                            <Label style={{ margin: "10px" }}>Tone of the Email</Label>
                            <Input onChange={onChange} name="tone" value={this.state.tone} style={{ margin: "0px 0px 20px 10px", width: "250px" }} className={`input-${this.state.mode}`} type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input>
                            <Label style={{ margin: "10px" }}>Specify number of words</Label> <br />
                            <Slider style={{ marginLeft: "1.5rem" }} axis="x" onChange={({ x }) => this.setState({ words: x })} x={this.state.words} xstep={50} xmin={100} xmax={1000} /> <br />
                            {this.state.words} words
                        </div>
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitEmail} style={{ marginTop: "1rem", width: "100%", fontSize: "1.2rem" }}>
                            {this.state.isLoading ? <Spinner /> : "Generate Email"}
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>See Generated Email Here:</b></div>
                        <div className="page-card-label">Generated email</div>
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

export default EmailGen