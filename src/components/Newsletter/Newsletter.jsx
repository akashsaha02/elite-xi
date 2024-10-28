import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import heroBg from '../../assets/bg-shadow.png';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('subscribedEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            setIsSubscribed(true);
        }
    }, []);

    const handleSubscribe = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && emailRegex.test(email)) {
            // Store the email in LocalStorage
            localStorage.setItem('subscribedEmail', email);
            setIsSubscribed(true);
            toast.success(`Subscribed successfully with email: ${email}`, {
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Please enter a valid email address', {
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleLogout = () => {
        // Remove the email from LocalStorage
        localStorage.removeItem('subscribedEmail');
        setEmail('');
        setIsSubscribed(false);
        toast.info('You have been unsubscribed.', {
            position: 'top-center',
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="p-4 backdrop-blur-xl bg-white/30 border rounded-2xl max-w-5xl mx-auto">
            <div style={{ backgroundImage: `url(${heroBg})` }} className="bg-white rounded-xl bg-cover bg-center px-5 py-10 md:py-12 lg:py-20 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {isSubscribed ? (
                        <>
                            Welcome back, <br /><span className="text-sm font-bold md:text-sm lg:text-lg">{email}</span>
                        </>
                    ) : (
                        'Subscribe to Our Newsletter'
                    )}
                </h2>
                <p className="text-gray-600 mb-6">
                    {isSubscribed
                        ? 'Thank you for subscribing! Stay tuned for the latest updates.'
                        : 'Get the latest updates and news right in your inbox!'}
                </p>
                {!isSubscribed ? (
                    <div className="flex flex-col sm:flex-row items-center gap-2 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                        />
                        <button
                            onClick={handleSubscribe}
                            className="bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 from-blue-500 to-pink-500 py-3 px-6 rounded-lg font-bold text-white transition-colors"
                        >
                            Subscribe
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 py-3 px-6 rounded-lg font-bold text-white transition-colors mt-2"
                    >
                        Unsubscribe
                    </button>
                )}
            </div>
        </div>
    );
};

export default Newsletter;
