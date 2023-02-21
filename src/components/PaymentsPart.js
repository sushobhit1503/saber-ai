import React from "react";
import { Card } from "ui-neumorphism";
import "../styles/Payments.css";

class PaymentsPart extends React.Component {
    constructor () {
        super ()
        this.state = {mode: ""}
    }
    componentDidMount () {
        this.setState ({mode: localStorage.getItem("mode")})
    }
    render () {
        return (
            <div style={{width:"80%", margin:"auto"}}>
                <div className="payment-field-heading">{this.props.elementName}</div>
                {this.props.element.map((eachElement, index) => {
                    return (
                        <Card dark={this.state.mode === "dark" ? true : false} inset={index % 2 === 0 ? true : true} style={{display:"flex", margin:"1rem", padding:"1rem"}} key={index}>
                            <div style={{width:"25%"}}>
                                {eachElement.name}
                            </div>
                        {eachElement.value.map(eachValue => {
                            if (eachValue === true || eachValue === false)
                            return (
                                <div className="payment-field-text" key={eachValue}>
                                    {eachValue ? <i className="fa fa-check"></i> : <i className="fa fa-times"></i>}
                                </div>
                            )
                            else 
                            return (
                                <div className={eachElement.name === "Plan Pricing" ? `payment-field-text bold-text` : `payment-field-text`} key={eachValue}>
                                    <div>
                                        {eachValue}
                                    </div> 
                                </div>
                            )
                        })}
                    </Card>
                    )
                })}
            </div>
        )
    }
}

export default PaymentsPart