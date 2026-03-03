import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 text-center">
            <div className="container">
                <span className="text-muted">
                    Copyright © <span id="year">{new Date().getFullYear()}</span>
                    <a href="#" className="text-dark fw-medium ms-1">Zynix</a>.
                    Designed with <i className="ri-heart-fill text-danger mx-1"></i> by
                    <a href="https://wcsrm.com/" target="_blank" rel="noopener noreferrer" className="ms-1">
                        <span className="fw-medium text-primary">Spruko</span>
                    </a>
                    All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
