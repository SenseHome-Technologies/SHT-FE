import React, { useEffect } from 'react';
import { AuthData } from "../../auth/AuthWrapper";
import { useNavigate } from 'react-router-dom';
import { nav } from '../structure/navigations';

export function BackOffice() {
    const { user } = AuthData();
    let navigate = useNavigate();

    useEffect(() => {
        if (!user.isAuthenticated) {
            console.log("not authenticated!!!");
            navigate(nav[1].path);
        }
    });

    return (
        <div >
            backoffice!
        </div>
    );
}