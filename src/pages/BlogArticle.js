import React from "react";
import { Input, Label } from "reactstrap";
import { Button, Tooltip, Switch } from "ui-neumorphism";
import Slider from "react-input-slider";
import "../styles/ServicePage.css";
import { blogArticle } from "../backend-calls/services";

class BlogArticle extends React.Component {
    constructor () {
        super ()
        this.state = {
            keywords: "",
            articleTitle: "",
            reply: "",
            words: 250,
            ref1: "",
            ref2: "",
            ref3: "",
            seo: false,
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
        const onChangeSeo = (event) => {
            this.setState ({seo: event.checked})
        }
        const toggleAdvanced = () => {
            this.setState ({showAdvancedOptions: !this.state.showAdvancedOptions})
        }
        const submitBlogs = async () => {
            const { keywords, articleTitle, words, ref1, ref2, ref3, seo } = this.state
            const res = await blogArticle("", articleTitle, "", keywords, words, seo,0, ref1, ref2, ref3)
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
                <Tooltip dark={this.state.mode === "dark" ? true : false} bottom content={<div>Generate professional article and blogs by giving outline. 
                    Give keywords for good fit with Search Engine Optimization. </div>}>
                    <b>BLOG ARTICLE GENERATION</b>
                </Tooltip>
                </div>
                <div className="page-container">
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>Enter The Details Of Your Article:</b></div>
                        <div className="page-card-label">Article Title</div>
                        <Input className={`input-${this.state.mode}`} style={{height:"12rem"}} placeholder="eg. Top 10 CRM Software" onChange={onChange} value={this.state.articleTitle} name="articleTitle" type="textarea" />
                        <div>Enter the title. Be as descriptive as possible</div>
                        <div className="page-card-label">Article description / Keywords</div>
                        <Input className={`input-${this.state.mode}`} style={{height:"20rem"}} placeholder="eg. CRM, Manager, Customer" onChange={onChange} value={this.state.keywords} name="keywords" type="textarea" />
                        <div>Give keywords that are better searchable</div>
                        <div onClick={toggleAdvanced} className={`advanced-options box-shadow-${this.state.mode}`} style={{padding: "0.5rem 1rem", borderRadius:"0.5rem", width:"max-content"}}>Advanced Options <i style={{padding:"5px"}} className="fa fa-angle-down"></i></div>
                        <div className={this.state.showAdvancedOptions ? `` : `display-options`}>
                            <Switch dark={this.state.mode === "dark" ? true : false} onChange={onChangeSeo} color="var(--success)" value={this.state.seo} /> Use keyword optimization for SEO? <br />
                            <Label style={{padding:"5px"}}>Tone of the email</Label>
                            <Input style={{width:"250px"}} onChange={onChange} value={this.state.tone} name="tone" className={`input-${this.state.mode}`} type="select">
                                <option value="Friendly">Friendly</option>
                                <option value="Professional">Professional</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Sales">Sales</option>
                            </Input> 
                            <Label style={{padding:"5px"}}>Specify Max Length</Label> <br />
                            <Slider style={{marginLeft:"1.5rem"}} axis="x" onChange={({x}) => this.setState({words: x})} x={this.state.words} xstep={50} xmin={100} xmax={1000} /> <br />
                            {this.state.words} words <br />
                            <Label style={{padding:"5px"}}>Add Reference Links</Label> <br />
                            <Input style={{marginBottom: "0.5rem"}} className={`input-${this.state.mode}`} placeholder="Reference Link 1" onChange={onChange} value={this.state.ref1} name="ref1" type="text" />
                            <Input style={{marginBottom: "0.5rem"}} className={`input-${this.state.mode}`} placeholder="Reference Link 2" onChange={onChange} value={this.state.ref2} name="ref2" type="text" />
                            <Input style={{marginBottom: "0.5rem"}} className={`input-${this.state.mode}`} placeholder="Reference Link 3" onChange={onChange} value={this.state.ref3} name="ref3" type="text" />
                        </div>
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={submitBlogs} style={{marginTop: "1rem", width:"100%"}}>
                            Generate Article
                        </Button>
                    </div>
                    <div className={`page-card card-${this.state.mode}`}>
                        <div className="page-card-heading"><b>Generated Article Here:</b></div>
                        <div className="page-card-label">Generated article</div>
                        <Input className={`input-${this.state.mode}`} style={{height:"30rem"}} value={this.state.reply} type="textarea" />
                        <Button dark={this.state.mode === "dark" ? true : false} onClick={copyToClipBoard} style={{marginTop: "1rem"}}>
                            Copy
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogArticle