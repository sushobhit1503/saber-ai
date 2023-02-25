import React from "react";
import { Input, Label, Spinner } from "reactstrap";
import { Button, Tooltip, Switch, Alert } from "ui-neumorphism";
import { socialAd } from "../backend-calls/services";
import "../styles/ServicePage.css";

class SocialMedia extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            reply: "",
            tone: "",
            ref1: "",
            ref2: "",
            ref3: "",
            seo: false,
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
        const onChangeSeo = (event) => {
            this.setState({ seo: event.checked })
        }
        const toggleAdvanced = () => {
            this.setState({ showAdvancedOptions: !this.state.showAdvancedOptions })
        }
        const submitAd = async () => {
            const { title } = this.state
            this.setState({ isLoading: true })
            const res = await socialAd(title)
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
                    <Tooltip dark={this.state.mode === "dark" ? true : false} bottom content={<div>Looking for some creative social media advert ideas for your online
                        campaigns on Facebook, Twitter or Instagram? We got you.</div>}>
                        <b>SOCIAL MEDIA ADVERTS</b>
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
                        <div className="page-card-heading"><b>What Is Your Ad Campaign?</b></div>
                        <div className="page-card-label">Subject or Title</div>
                        <Input className={`input-${this.state.mode}`} placeholder="eg. Samsung S12 Mobile Phone" onChange={onChange} value={this.state.title} name="title" />
                        <div>Describe the subject or title for the ad campaign.</div>
                        <div onClick={toggleAdvanced} className={`advanced-options box-shadow-${this.state.mode}`} style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", width: "max-content" }}>Advanced Options <i style={{ padding: "5px" }} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch dark={this.state.mode === "dark" ? true : false} onChange={onChangeSeo} color="var(--success)" value={this.state.seo} /> Use keyword optimization for SEO? <br />
                            <Label style={{ margin: "10px" }}>Tone of the Email</Label>
                            <Input style={{ width: "250px", margin: "0px 0px 10px 10px" }} onChange={onChange} value={this.state.tone} name="tone" className={`input-${this.state.mode}`} type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input>
                            <Label style={{ padding: "5px" }}>Add Reference Links</Label> <br />
                            <Input style={{ marginBottom: "0.5rem" }} className={`input-${this.state.mode}`} placeholder="Reference Link 1" onChange={onChange} value={this.state.ref1} name="ref1" type="text" />
                            <Input style={{ marginBottom: "0.5rem" }} className={`input-${this.state.mode}`} placeholder="Reference Link 2" onChange={onChange} value={this.state.ref2} name="ref2" type="text" />
                            <Input style={{ marginBottom: "0.5rem" }} className={`input-${this.state.mode}`} placeholder="Reference Link 3" onChange={onChange} value={this.state.ref3} name="ref3" type="text" />
                        </div>
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitAd} style={{ marginTop: "1rem", width: "100%" }}>
                            {this.state.isLoading ? <Spinner /> : "Generate Ad"}
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>See The Generated Advertisement Here:</b></div>
                        <div className="page-card-label">Advertisement:</div>
                        <Input className={`input-${this.state.mode} mailBox`} d={true} height={320} value={this.state.reply} type="textarea" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={copyToClipBoard} style={{ marginTop: "1rem" }}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialMedia