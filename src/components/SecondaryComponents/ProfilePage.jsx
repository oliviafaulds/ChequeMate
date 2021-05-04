import React from 'react';
//import { UserContext } from "../providers/UserProvider";
//import {auth} from "../firebase";


const ProfilePage = () => {
    return (
        <div>
            <div
                style={{
                    background:
                        `url(https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg)  no-repeat center center`,
                    backgroundSize: "cover",
                    height: "200px",
                    width: "200px"
                }}
               
            ></div>
            <div className="md:pl-4">
                <h2> USER NAME</h2>
                <h3> EMAIL ADDRESS</h3>
            </div>

            <button>Sign out</button>
        </div>
    )
};
export default ProfilePage;