import { useEffect } from "react";
import { createContext, useContext, useState } from "react"
import { RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
    // Store user info and authentication state
    const [user, setUser] = useState({
        name: "",
        email: "",
        isAuthenticated: Boolean(localStorage.getItem('isAuthenticated')) || false,
        token: localStorage.getItem('token') || ""
    });

    // Login function: calls the backend API and updates state
    const login = async (email, password) => {
        try {
            // Make a POST request to your backend login endpoint
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();

            // If login is successful, update user state and localStorage
            if (response.ok && result.token) {
                setUser({
                    name: result.user?.username || "",
                    email: result.user?.email || "",
                    isAuthenticated: true,
                    token: result.token
                });
                localStorage.setItem('isAuthenticated', "true");
                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));
            } else {
                // If login fails, clear state and storage
                setUser({ name: "", email: "", isAuthenticated: false, token: "" });
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
            // Return the result so the caller can handle navigation or errors
            return result;
        } catch (error) {
            // Handle network or unexpected errors
            setUser({ name: "", email: "", isAuthenticated: false, token: "" });
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return { status: 500, message: "Network error" };
        }
    };

    // Logout function: clears user state and localStorage
    const logout = () => {
        setUser({ name: "", email: "", isAuthenticated: false, token: "" });
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    // Provide user state and auth functions to the rest of the app
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <RenderRoutes />
        </AuthContext.Provider>
    );
};