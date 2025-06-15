import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthData } from "../../auth/AuthWrapper";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.css';

const LoginForm = () => {
    const { user, login } = AuthData();
    let navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(""); 

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
        <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.formContainer}>
            <Form.Group className={`${styles.mb3} ${styles.textStart}`} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.textCenter}
                    placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid" className={styles.invalidFeedback}>
                    Please provide a valid email.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={`${styles.mb3} ${styles.textStart}`} controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={styles.textCenter}
                    placeholder="Enter your password"
                />
                <Form.Control.Feedback type="invalid" className={styles.invalidFeedback}>
                    Please provide your password.
                </Form.Control.Feedback>
            </Form.Group>
            {error && (
                <div className={styles.errorMsg}>{error}</div>
            )}
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className={styles.btnFullWidth}>
                    Login
                </Button>
            </div>
            <div className={`text-center ${styles.lowered}`}>
                <span className={styles.newHereText}>New here?</span>
                <Button
                    variant="success"
                    className={styles.registerButton}
                    onClick={() => navigate('/register')}
                >
                    Register
                </Button>
            </div>
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

export { LoginForm };