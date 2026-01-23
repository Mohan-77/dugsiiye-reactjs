import React, { useContext } from "react";

import userContext from "./UserContext.js";
export default function UseProfile() {
    const user = useContext(userContext);
    return (
        <>
        
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        </>
    );
}