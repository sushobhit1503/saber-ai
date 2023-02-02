import React from "react";
import { Input } from "reactstrap";
import { Card, Button, Tooltip } from "ui-neumorphism";
import "../styles/ServicePage.css";

class BlogArticle extends React.Component {
    constructor () {
        super ()
        this.state = {
            keywords: "",
            articleTitle: "",
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
                        <Input className="input mailBox" height={320} placeholder="eg. CRM, Manager, Customer" onChange={onChange} value={this.state.keywords} name="keywords" />
                        <div>Give keywords that are better searchable</div>
                        <Button>
                            Generate Article
                        </Button>
                    </Card>
                    <Card style={{width:"50%"}} className="page-card">
                        <div className="page-card-heading">SEE THE RESULTS HERE</div>
                        <div className="page-card-label">Reply</div>
                        <Input className="input mailBox" disabled={true} height={320} value={this.state.reply} />
                        <Button>
                            Copy
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BlogArticle