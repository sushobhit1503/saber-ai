import React from "react";
import "../styles/Payments.css";
import { plans, services, description, usage, pricing, integration } from "../data/Payments"
import { Divider } from "ui-neumorphism";
import { Button } from "reactstrap";
import PaymentsPart from "../components/PaymentsPart";

class Payments extends React.Component {
    render () {
        return (
            <div style={{marginBottom:"3rem"}}>
                <div className="page-heading">
                    PLANS
                </div>
                <div style={{display:"flex", margin: "auto", width:"80%"}}>
                    <div style={{width:"25%"}}>

                    </div>
                    {plans.map((eachPlan, index) => {
                        return (
                            <div key={eachPlan} className="payment-plan-container">
                                <div className="payment-plan-name" key={eachPlan}>
                                    {eachPlan}
                                </div>
                                <div className="payment-plan-description">
                                    {description[index].map(eachDescription => {
                                        return (
                                            <div>
                                                {eachDescription}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Divider />
                <PaymentsPart elementName="Pricing" element={pricing} />
                <PaymentsPart elementName="Usage" element={usage} />
                <PaymentsPart elementName="Services" element={services} />
                <PaymentsPart elementName="Intgerations" element={integration} />
                <div style={{display:"flex", margin: "auto", width:"80%"}}>
                    <div style={{width:"25%"}}>

                    </div>
                    <div className="payment-plan-container">
                        <div className="payment-plan-name">
                            FREE
                        </div>
                    </div>
                    <div style={{width:"25%"}}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <Button color="danger">
                                SUBSCRIBE
                            </Button>
                        </div> <br />
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <Button>
                                TRY FOR 1 MONTH
                            </Button>
                        </div>
                    </div>
                    <div style={{width:"25%"}}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <Button color="danger">
                                SUBSCRIBE
                            </Button>
                        </div> <br />
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <Button>
                                TRY FOR 1 MONTH
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payments