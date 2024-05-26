import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingDate = location.state?.bookingDate || 'Fri, 27th May';
    const bookingTime = location.state?.bookingTime || '12-1 PM';
    const bookingAmount = location.state?.bookingAmount || 200;
    const gst = bookingAmount * 0.18;
    const totalAmount = bookingAmount + gst;
    const ucCredits = location.state?.ucCredits || 40;
    const amountToPay = totalAmount - ucCredits;

    const handlePayNow = () => {
        navigate('/payment', { state: { amount: amountToPay } });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">Booking Confirmed!</h2>
                <div className="flex flex-col items-center">
                    {/* <svg
                        className="w-16 h-16 text-green-500 mb-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-5.707l-4.414-4.414a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0z"
                            clipRule="evenodd"
                        />
                    </svg> */}
                    <p className="text-lg font-semibold text-gray-700">Maid will arrive between</p>
                    <p className="text-gray-500">{bookingTime} on {bookingDate}</p>
                    <button className="mt-4 px-4 py-2 text-sm text-cyan-500 border border-cyan-500 rounded-md hover:bg-blue-50">
                        Re-schedule
                    </button>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">Payment Summary</h3>
                    <div className="flex justify-between text-gray-700 mt-2">
                        <span>Total</span>
                        <span>₹ {bookingAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>GST (18%)</span>
                        <span>₹ {gst.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>BMS credits</span>
                        <span>- ₹ {ucCredits.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-gray-800 mt-2">
                        <span>Amount to pay</span>
                        <span>₹ {amountToPay.toFixed(2)}</span>
                    </div>
                    {/* <button className="mt-4 w-full px-4 py-2 text-white bg-cyan-600 rounded-md hover:bg-cyan-700">
                        Pay Now
                    </button> */}
                    <button
                        onClick={handlePayNow}
                        className="mt-4 w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                    >
                        Pay Now
                    </button>
                </div>
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-800">Service Checklist</h3>
                    <p className="text-gray-700">See what all you should know or do while the maid serves you.</p>
                    <div className="mt-4 text-cyan-500">
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="mt-6 border-t pt-4 flex items-center">
                    <p className="text-gray-700 mr-2">Need our help?</p>
                    <a href="tel:9451231245" className="text-cyan-500">Call us</a>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirmation;
