import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from "../../auth/AuthWrapper";

const Form = () => {
    const { user, login } = AuthData();
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(formData.email, formData.password).then(() => {
            if (user.isAuthenticated) {
                navigate("/backoffice");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <input type="submit" value="Login" />
        </form>
    );
}


export function Login() {
    return (
        <div >
            Login!
            <Form />
        </div>
    );
}