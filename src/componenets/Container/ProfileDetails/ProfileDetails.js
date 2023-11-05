import Wrapper from "../../Wrapper/Wrapper"
import "./ProfileDetails.css"

import profileImage from "../../../images/profile.jpg"
import Btn, { Btn2 } from "../../Btn/Btn"
const ProfileDetails = () => {
    return (
        <>
            <Wrapper>
                <div className="details-porile" data-aos="fade-right">
                    <div className="profile-img">
                        <img src={profileImage} alt="profile image" />
                    </div>
                    <div className="profile-details">
                        <Btn name="Offline" />
                        <h1>Yossef Sabry</h1>
                        <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                        <Btn2 name="Start Live Stream" />
                    </div>
                    <div className="profile-card">
                        <div>
                            <p>Games Downlaod</p>
                            <span>3</span>
                        </div>
                        <div>
                            <p>Friends Online</p>
                            <span>16</span>
                        </div>
                        <div>
                            <p>Live Stream</p>
                            <span>None</span>
                        </div>
                        <div>
                            <p>clips</p>
                            <span>29</span>
                        </div>
                    </div>
                </div>

            </Wrapper>

        </>
    )
}

export default ProfileDetails
