import Navbar from "./Navbar.jsx";
import React from "react";
export default function Header({ user }) {
    return (
        <>
        <h2>Header </h2>
        <Navbar user={user} />
        </>
    );
}