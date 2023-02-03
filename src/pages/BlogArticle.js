import React from "react";
import { Input, Label } from "reactstrap";
import { Card, Button, Tooltip, Switch } from "ui-neumorphism";
import Slider from "react-input-slider";
import "../styles/ServicePage.css";

class BlogArticle extends React.Component {
    constructor () {
        super ()
        this.state = {
            keywords: "",
            articleTitle: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards",
            words: 0,
            ref1: "",
            ref2: "",
            ref3: ""
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
                <Tooltip top content={<div>Generate professional article and blogs by giving outline. 
                    Give keywords for good fit with Search Engine Optimization. </div>}>
                    BLOG ARTICLE GENERATION
                </Tooltip>
                </div>
                <div className="page-container">
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">ENTER THE DETAILS OF YOUR ARTICLE</div>
                        <div className="page-card-label">Article Title</div>
                        <Input className="input" placeholder="eg. Top 10 CRM Software" onChange={onChange} value={this.state.articleTitle} name="articleTitle" />
                        <div>Enter the title. Be as descriptive as possible</div>
                        <div className="page-card-label">Keywords</div>
                        <Input className="input mailBox" height={320} placeholder="eg. CRM, Manager, Customer" onChange={onChange} value={this.state.keywords} name="keywords" type="textarea" />
                        <div>Give keywords that are better searchable</div>
                        <div onClick={toggleAdvanced} className="advanced-options">Advanced Options <i style={{padding:"5px"}} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch color="var(--success)" /> Use keyword optimization for SEO? <br />
                            <Label style={{padding:"5px"}}>Tone of the email</Label>
                            <Input style={{width:"250px"}} onChange={onChange} value={this.state.tone} name="tone" className="input" type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input> 
                            <Label style={{padding:"5px"}}>Specify Max Length</Label> <br />
                            <Slider style={{marginLeft:"1.5rem", marginBottom: "1rem"}} axis="x" x={this.state.words} xstep={50} xmin={100} xmax={1000} /> <br />
                            <Label style={{padding:"5px"}}>Add Reference Links</Label> <br />
                            <Input style={{marginBottom: "0.5rem"}} className="input" placeholder="Reference Link 1" onChange={onChange} value={this.state.ref1} name="ref1" type="text" />
                            <Input style={{marginBottom: "0.5rem"}} className="input" placeholder="Reference Link 2" onChange={onChange} value={this.state.ref2} name="ref2" type="text" />
                            <Input style={{marginBottom: "0.5rem"}} className="input" placeholder="Reference Link 3" onChange={onChange} value={this.state.ref3} name="ref3" type="text" />
                        </div>
                        <Button>
                            Generate Article
                        </Button>
                    </Card>
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} type="textarea" />
                        <Button style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BlogArticle