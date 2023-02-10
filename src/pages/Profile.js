import React from "react";
import "../styles/ServicePage.css"
import "../styles/ProfilePage.css"
import { Card, Button } from "ui-neumorphism";
import { profileInfo } from "../backend-calls/profileInfo";

class Profile extends React.Component {
    constructor () {
        super ()
        this.state = {
            profile: {}
        }
    }
    componentDidMount () {
        const res = profileInfo ()
        res.then (result => {
            console.log(result);
            this.setState ({profile: result})
        }).catch (err => console.log(err.message))
    }
    render () {
        return (
            <div>
                <div className="page-heading">YOUR PROFILE</div>
                <Card inset style={{}} className="profile-photo-container">
                </Card>
                <div className="profile-container">
                    <Card inset className="profile-box">
                        <div className="plan-name">{this.state.profile.plan ? this.state.profile.plan.toUpperCase() : null} PLAN</div>
                        <div className="profile-user-name">{this.state.profile.name}</div>
                        <div className="profile-stat-container">
                            <div className="profile-stat">
                                <div className="profile-stat-title">PLAN EXPIRES ON</div>
                                <Card inset className="profile-stat-value">2 Mar 2023</Card>
                            </div>
                            <div className="profile-stat">
                                <div className="profile-stat-title">PLAN RENEWAL ON</div>
                                <Card inset className="profile-stat-value">3 Mar 2023</Card>
                            </div>
                            <div className="profile-stat">
                                <div className="profile-stat-title">TOTAL WORDS GENERATED</div>
                                <Card inset className="profile-stat-value">123 Words</Card>
                            </div>
                        </div>
                        <div className="profile-upgrade">
                            <Button>
                                UPGRADE
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Profile