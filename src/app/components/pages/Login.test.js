import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

import { AuthData } from '../../auth/AuthWrapper';
import { LoginForm } from './Login';

jest.mock('../../auth/AuthWrapper', () => ({
    AuthData: () => ({
        login: jest.fn(),
        user: {}
    })
}));

afterEach(() => {
    jest.clearAllMocks();
});

describe('LoginForm', () => {
    it('renders email and password fields', () => {
        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );
        expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/enter your password/i)).toBeInTheDocument();
    });

    it('shows error on failed login', async () => {
        const mockLogin = jest.fn().mockResolvedValue({ status: 400, message: 'Invalid credentials' });
        jest.spyOn(require('../../auth/AuthWrapper'), 'AuthData').mockReturnValue({ login: mockLogin, user: {} });

        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/enter your email/i), { target: { value: 'test@example.com', name: 'email' } });
        fireEvent.change(screen.getByPlaceholderText(/enter your password/i), { target: { value: 'wrongpass', name: 'password' } });
        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => {
            expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
        });
    });

    it('navigates on successful login', async () => {
        const mockLogin = jest.fn().mockResolvedValue({ status: 200, token: 'abc', user: { username: 'Test', email: 'test@example.com' } });
        jest.spyOn(require('../../auth/AuthWrapper'), 'AuthData').mockReturnValue({ login: mockLogin, user: {} });

        render(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/enter your email/i), { target: { value: 'test@example.com', name: 'email' } });
        fireEvent.change(screen.getByPlaceholderText(/enter your password/i), { target: { value: 'correctpass', name: 'password' } });
        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'correctpass');
            expect(mockNavigate).toHaveBeenCalledWith('/backoffice');
        });
    });
});