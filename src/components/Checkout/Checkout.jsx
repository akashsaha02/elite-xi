import { useState } from "react";
import PropTypes from "prop-types";

const Checkout = ({ selectedPlayers }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCheckout = () => {
        setModalOpen(true); // Open the modal to show selected players
    };

    const closeModal = () => {
        setModalOpen(false); // Close the modal
    };

    // Calculate total price
    const totalPrice = selectedPlayers.reduce((acc, player) => acc + player.price, 0);
    const taxAmount = (totalPrice * 5) / 100; // Calculate 5% tax
    const finalTotal = totalPrice + taxAmount; // Final total after adding tax
    const playerCount = selectedPlayers.length;

    return (
        <div className="border py-8 bg-slate-50 px-6 rounded-xl shadow-md">
            <h1 className="text-center text-2xl font-extrabold text-gray-800 mb-8">Checkout</h1>
            <div className="space-y-4">
                {selectedPlayers.map((player, idx) => (
                    <div key={player.playerId} className="bg-white p-4 shadow rounded-lg flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <p className="text-sm font-medium text-gray-700">{idx + 1}.</p>
                            <div>
                                <p className="text-sm font-medium text-gray-700">{player.name}</p>
                                <p className="text-xs text-gray-500">{player.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-sm font-bold text-gray-700">${player.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-5 shadow rounded-lg flex justify-between items-center mt-6">
                <h3 className="text-lg font-bold text-gray-800">Total ({playerCount} Players)</h3>
                <p className="text-lg font-bold text-gray-800">${totalPrice.toFixed(2)}</p>
            </div>

            <div className="mt-6 space-y-3">
                <button
                    onClick={handleCheckout}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold w-full transition-transform transform hover:scale-105"
                >
                    Checkout Now
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-xl p-8 w-96 shadow-lg transform transition-all">
                        <h2 className="text-xl font-bold mb-4 text-center text-green-600">Checkout Successful! 🎉</h2>
                        <h3 className="text-md font-semibold mb-2 text-center text-gray-800">Bidded Players Summary</h3>
                        <div className="space-y-2">
                            {selectedPlayers.map((player, idx) => (
                                <div key={player.id} className="flex justify-between mb-1">
                                    <span className="text-gray-700">{idx + 1}. {player.name}</span>
                                    <span className="text-gray-700">${player.price}</span>
                                </div>
                            ))}
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between mt-2">
                            <p className="font-bold text-gray-800">Subtotal</p>
                            <p className="font-bold text-gray-800">${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="font-bold text-gray-800">Tax (5%)</p>
                            <p className="font-bold text-gray-800">${taxAmount.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <p className="font-bold text-gray-800">Final Total</p>
                            <p className="font-bold text-gray-800">${finalTotal.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={closeModal}
                            className="bg-blue-500 text-white mt-4 py-3 px-5 rounded-full w-full transition-transform transform hover:scale-105"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

Checkout.propTypes = {
    selectedPlayers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Checkout;
