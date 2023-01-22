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