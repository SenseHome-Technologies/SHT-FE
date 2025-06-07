import { useEffect } from "react";
import { createContext, useContext, useState } from "react"
import { RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
    const [user, setUser] = useState({ name: "", isAuthenticated: Boolean(localStorage.getItem('isAuthenticated')) || false })

    const login = (userName, password) => {
        // Make a call to the authentication API to check the username
        return new Promise((resolve, reject) => {
            if (password === "abcd") {
                setUser({ name: userName, isAuthenticated: true });
                localStorage.setItem('isAuthenticated', true);
                resolve("success");
            } else {
                reject("Incorrect password");
            }
        });
    }

    const logout = () => {
        setUser({ ...user, isAuthenticated: false })
        localStorage.setItem('isAuthenticated', true);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <>
                <RenderRoutes />
            </>
        </AuthContext.Provider>
    )
}