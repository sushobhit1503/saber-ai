import React from "react";
import "../styles/ServicePage.css"
import "../styles/ProfilePage.css"
import { Card, Button } from "ui-neumorphism";

class Profile extends React.Component {
    render () {
        return (
            <div>
                <div className="page-heading">YOUR PROFILE</div>
                <Card inset style={{}} className="profile-photo-container">
                </Card>
                <div className="profile-container">
                    <Card inset className="profile-box">
                        <div className="plan-name">BLAZE PLAN</div>
                        <div className="profile-user-name">JACK WILSON</div>
                        <div className="profile-stat-container">
                            <div className="profile-stat">
                                <div className="profile-stat-title">PLAN EXPIRES ON</div>
                                <Card inset className="profile-stat-value">23 Feb 2023</Card>
                            </div>
                            <div className="profile-stat">
                                <div className="profile-stat-title">PLAN RENEWAL ON</div>
                                <Card inset className="profile-stat-value">24 Feb 2023</Card>
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