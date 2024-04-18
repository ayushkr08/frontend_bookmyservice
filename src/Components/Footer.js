import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-200 text-black p-4 text-center">
            <p>&copy; {new Date().getFullYear()} BookMyService </p>
            <ul className="flex justify-center gap-4">
                <li>
                    <Link to="/about" className="text-black">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-black">
                        Contact
                    </Link>
                </li>
                {/* Add more navigation links here */}
            </ul>
        </footer>
    );
}

export default Footer;