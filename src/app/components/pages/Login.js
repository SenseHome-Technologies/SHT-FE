import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from "../../auth/AuthWrapper";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
    const { user, login } = AuthData();
    let navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(""); // For showing login errors

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setValidated(true);
        setError("");
        if (formData.email && formData.password) {
            const result = await login(formData.email, formData.password);
            if (result && result.status === 200 && result.token) {
                navigate("/backoffice");
            } else {
                setError(result?.message || "Login failed");
            }
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Form.Group className="mb-3 text-start" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-center"
                    placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="text-center"
                    placeholder="Enter your password"
                />
                <Form.Control.Feedback type="invalid">
                    Please provide your password.
                </Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="w-100">
                    Login
                </Button>
            </div>
            {/* <div className="text-center mt-1">
                <em>Forgot your password?</em>
            </div> */}
        </Form>
    );
};

export function Login() {
    return (
        <div>
            <LoginForm />
        </div>
    );
}