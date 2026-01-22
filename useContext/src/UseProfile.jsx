import React from "react";
export default function UseProfile({ user }) {
    return (
        <>
        
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        </>
    );
}