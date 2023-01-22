import React from "react";
import { Button, Input } from "reactstrap";
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
                <div className="page-heading">BLOG ARTICLE GENERATION</div>
                <div className="page-description">
                    Generate professional article and blogs by giving outline. 
                    Give keywords for good fit with Search Engine Optimization.
                </div>
                <div className="page-container">
                    <div className="page-card">
                        <div className="page-card-heading">ENTER THE DETAILS OF YOUR ARTICLE</div>
                        <div className="page-card-label">Article Title</div>
                        <Input placeholder="eg. Top 10 CRM Software" onChange={onChange} value={this.state.articleTitle} name="articleTitle" />
                        <div>Enter the title. Be as descriptive as possible</div>
                        <div className="page-card-label">Keywords</div>
                        <Input className="mailBox" placeholder="eg. CRM, Manager, Customer" onChange={onChange} value={this.state.keywords} name="keywords" />
                        <div>Give keywords that are better searchable</div>
                        <Button className="page-action-buttons">
                            Generate Article
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

export default BlogArticle