import UseProfile from "./UseProfile";
import React from "react";
export default function Navbar({ user }) {
    return (
        <>
        <h2>Navbar </h2>
        <UseProfile user={user} />
        </>
    );
}