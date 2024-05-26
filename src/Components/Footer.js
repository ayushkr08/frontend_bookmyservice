import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../Assets/icon.png';

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-white p-4 flex flex-col sm:flex-row sm:justify-between">
            <div className="flex items-center">
                <img src={icon} alt="Urban Company Logo" className="w-20 h-20 mr-4" />
                <p className="text-lg text-black font-bold ">BookMyService</p>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:flex-grow pl-20">  {/* Use grid for three columns */}
                <div className="pl-20 footer-section">
                    <h1 className="text-base font-semibold mb-2 text-black">For Customers</h1>
                    <ul className="list-none pl-0">
                        <li className="mb-2">
                            <Link to="/about" className="text-gray-600 hover:underline">
                                About us
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/reviews" className="text-gray-600 hover:underline">
                                BMS reviews
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-600 hover:underline">
                                Terms and conditions
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-600 hover:underline">
                                Privacy policy
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-600 hover:underline">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h1 className="text-base font-semibold mb-2 text-black">Social links</h1>
                    <ul className="list-none pl-0">
                        <li className="mb-2">
                            <Link to="https://medium.com/" className="text-gray-600 hover:underline">
                                Blog
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://www.apple.com/in/app-store/" className="text-gray-600 hover:underline">
                                App Store
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://play.google.com/store/apps" className="text-gray-600 hover:underline">
                                Google Play
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <p className="text-white">{/* Add your company contact information here */}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;