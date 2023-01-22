import React from "react";
import "../styles/ServicePage.css"
import "../styles/ProfilePage.css"
import { Button } from "reactstrap";

class Profile extends React.Component {
    render () {
        return (
            <div>
                <div className="page-heading">YOUR PROFILE</div>
                <div className="profile-photo-container">

                </div>
                <div className="profile-container">
                    <div className="profile-box">
                        <div className="plan-name">BLAZE PLAN</div>
                        <div className="profile-user-name">JACK WILSON</div>
                        <div className="profile-stat-container">
                            <div></div>
                            <div className="profile-stat">
                                <div className="profile-stat-title">PLAN EXPIRES ON</div>
                                <div className="profile-stat-value">23 Feb 2023</div>
                            </div>
                            <div className="profile-stat">
                                <div className="profile-stat-title">PLAN RENEWAL ON</div>
                                <div className="profile-stat-value">24 Feb 2023</div>
                            </div>
                            <div className="profile-stat">
                                <div className="profile-stat-title">TOTAL WORDS GENERATED</div>
                                <div className="profile-stat-value">123 Words</div>
                            </div>
                        </div>
                        <div className="profile-upgrade">
                            <Button className="page-action-buttons1">
                                UPGRADE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile