import React from 'react';
import { ComplexNavbar as Navbar } from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { NonLoggedInNavbar } from '../navbar1/Navbar1';

function NonLoggedInLayout({ children }) {
    return (
        <div>
            <NonLoggedInNavbar />
            <div className="content">
                {children} {/* Ensure children are rendered here */}
            </div>
        </div>
    );
}

export default NonLoggedInLayout;