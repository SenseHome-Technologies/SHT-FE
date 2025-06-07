import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login } from '../Login';

export function LoginModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} dialogClassName="custom-login-modal login-modal-top">
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Login />
            </Modal.Body>
        </Modal>
    );
}