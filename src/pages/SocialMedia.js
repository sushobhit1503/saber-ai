import React from "react";
import { Input, Label } from "reactstrap";
import { Button, Tooltip, Switch } from "ui-neumorphism";
import { socialAd } from "../backend-calls/services";
import "../styles/ServicePage.css";

class SocialMedia extends React.Component {
    constructor () {
        super ()
        this.state = {
            title: "",
            reply: "",
            tone: "",
            seo: false
        }
    }
    render () {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState ({[name]: value})
        }
        const onChangeSeo = (event) => {
            this.setState ({seo: event.checked})
        }
        const toggleAdvanced = () => {
            this.setState ({showAdvancedOptions: !this.state.showAdvancedOptions})
        }
        const submitAd = async () => {
            const { title } = this.state
            const res = await socialAd(title)
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
                <Tooltip bottom content={<div>Looking for some creative social media advert ideas for your online
                    campaigns on Facebook, Twitter or Instagram? We got you.</div>}>
                    SOCIAL MEDIA ADVERTS
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className="page-card card">
                        <div className="page-card-heading">WHAT IS YOUR AD CAMPAIGN ABOUT?</div>
                        <div className="page-card-label">Subject or Title</div>
                        <Input className="input" placeholder="eg. Samsung S12 Mobile Phone" onChange={onChange} value={this.state.title} name="title" />
                        <div>Describe the subject or title for the ad campaign.</div>
                        <div onClick={toggleAdvanced} className="advanced-options" style={{boxShadow:"5px 5px 12px #BEC8E4, -4px -4px 10px #FFFFFF", padding: "0.5rem 1rem", borderRadius:"0.5rem", width:"max-content"}}>Advanced Options <i style={{padding:"5px"}} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch onChange={onChangeSeo} color="var(--success)" value={this.state.seo} /> Use keyword optimization for SEO? <br /> 
                            <Label style={{margin:"10px"}}>Tone of the Email</Label>
                            <Input style={{width:"250px", margin: "0px 0px 10px 10px"}} onChange={onChange} value={this.state.tone} name="tone" className="input" type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input>
                        </div>
                        <Button onClick={submitAd} style={{marginTop: "1rem", width:"100%"}}>
                            Generate Ad
                        </Button>
                    </div>
                    <div className="page-card card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button onClick={copyToClipBoard} style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialMedia