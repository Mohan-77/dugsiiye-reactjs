import UseProfile from "./UseProfile";
import React, {useContext} from "react";
import userContext from "./UserContext.js";
export default function Navbar() {
    const user = useContext(userContext);
    return (
        <>
        <h2>my name is {user.name}</h2>
        <UseProfile />
        </>
    );
}