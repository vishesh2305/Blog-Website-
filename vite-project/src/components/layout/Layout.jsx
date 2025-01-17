import React from 'react'
import { ComplexNavbar as Navbar } from '../navbar/Navbar';
import Footer from '../footer/Footer'

function Layout({ children }) {
    return (
        <div>
            {/* Navbar  */}
            <Navbar />

            {/* main Content  */}
            <div className="content min-h-full">
                {children}
            </div>

            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Layout