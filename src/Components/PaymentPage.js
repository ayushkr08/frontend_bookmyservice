import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
    const location = useLocation();
    const amountToPay = location.state?.amount || 0;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Select payment method</h2>
                <p className="text-center text-gray-600 mb-4">Amount to pay: ₹{amountToPay.toFixed(2)}</p>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
                        <span className="text-gray-700">Debit or Credit card</span>
                        <span className="text-blue-500 hover:underline cursor-pointer">Add a card</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
                        <span className="text-gray-700">UPI</span>
                        <span className="text-blue-500 hover:underline cursor-pointer">Pay via another UPI ID</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
                        <span className="text-gray-700">Wallet</span>
                        <span className="text-blue-500 hover:underline cursor-pointer">Paytm Payments Bank Wallet</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
                        <span className="text-gray-700">Netbanking</span>
                        <span className="text-blue-500 hover:underline cursor-pointer">See all banks</span>
                    </div>
                    <div className="flex flex-col space-y-2 p-4 border border-gray-300 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Pay after service</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Pay online after service</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Pay with cash after service</span>
                            <span className="text-gray-500">No insurance on cash payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
