// PaymentPage.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';

// Replace with your actual Stripe public key
const stripePromise = loadStripe('pk_test_51PKZTNSI0MgMJZBHD6bklmMy6Z6U7XzwwMaJUF61jh0IrWs3tQsBd5MIVrKFS20SC38duz04CRk2z57JDnoqxQ8H00H17WWG2r');

const PaymentPage = () => {
    const location = useLocation();
    const amount = location.state?.amount || 0;

    const handleClick = async () => {
        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1HgG2YD5PErBzWgr43D0lscR', // Replace with your actual price ID from Stripe
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: window.location.origin + '/success',
            cancelUrl: window.location.origin + '/cancel',
        });

        if (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">Complete Your Payment</h2>
                <button
                    role="link"
                    onClick={handleClick}
                    className="mt-4 w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
