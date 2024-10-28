import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";

const SelectedPlayerCard = ({ deletePlayer, setAvailablePlayers, selectedPlayers, setShowFilters }) => {
    const handleAddMorePlayers = () => {
        console.log("Add More Players button clicked");
        setAvailablePlayers(true);
    };

    return (
        <div className='border rounded-lg p-4 mb-10'>
            {selectedPlayers.map((player) => (
                <div key={player.id} className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden p-4 gap-4 mb-4 border">
                    <img
                        src={player.player_image}
                        alt={player.name}
                        className="w-full sm:w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold text-gray-800">{player.name}</h2>
                        <p className="text-gray-600">{player.category}</p>
                        <p className="mt-2 text-sm text-gray-500">
                            <span className="font-semibold">Price:</span> ${player.price.toLocaleString()}
                        </p>
                    </div>
                    <button
                        onClick={() => deletePlayer(player.id, player.price)}
                        className="p-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                        <MdDeleteForever size={24} />
                    </button>
                </div>
            ))}
            <div className='flex justify-center items-center'>
                <button
                    onClick={()=>{
                        handleAddMorePlayers();
                        setShowFilters(true);
                    }}
                    className="rounded-lg py-2 px-6 md:text-lg font-semibold bg-yellow-300 "
                >
                    Add More Players
                </button>
            </div>
        </div>
    );
};
SelectedPlayerCard.propTypes = {
    deletePlayer: PropTypes.func.isRequired,
    setAvailablePlayers: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            player_image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    setShowFilters: PropTypes.func.isRequired,
};
export default SelectedPlayerCard;