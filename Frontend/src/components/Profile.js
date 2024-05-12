import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/api/user/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        // Replace `userId` with the actual user ID from your app
        const userId = '12345';
        fetchUser();
    }, []);

    return (
        <>
            <h2>Your Profile</h2>
            {user && (
                <div>
                    <h6>Name : {user.name}</h6>
                    <h6>Email : {user.email}</h6>
                    <div className="conatiner">
                        <h6>Gender : </h6>
                        {/* Render the gender radio buttons based on the user's gender */}
                        <input
                            className="form-check-input mt-3 mx-2"
                            type="radio"
                            name="gender"
                            id="male"
                            checked={user.gender === 'male'}
                            disabled
                        />
                        <label className="form-check-label mt-3 mx-2" htmlFor="male">
                            <b>Male</b>
                        </label>
                        <input
                            className="form-check-input mt-3 mx-2"
                            type="radio"
                            name="gender"
                            id="female"
                            checked={user.gender === 'female'}
                            disabled
                        />
                        <label className="form-check-label mt-3 mx-2" htmlFor="female">
                            <b>Female</b>
                        </label>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;