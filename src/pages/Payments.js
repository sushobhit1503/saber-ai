import React from "react";
import { Table } from "ui-neumorphism";
import "../styles/ServicePage.css";

class Payments extends React.Component {
    constructor () {
        super ()
        this.state = {
            tweet: "",
            reply: "Dear Saber, Thanks for inviting me to your wedding ! Will surely attend it.Thanks.Regards"
        }
    }
    render () {
        return (
            <div>
                <div className="page-heading">
                    PLANS
                </div>
                <Table />
            </div>
        )
    }
}

export default Payments