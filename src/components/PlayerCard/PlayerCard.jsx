// import PropTypes from 'prop-types';
// const PlayerCard = ({ player, handleSelectPlayer }) => {
//     return (
//         <div className=" bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:shadow-lg">
//             <img
//                 className="w-full h-64 object-cover"
//                 src={player.player_image}
//                 alt={player.name}
//             />
//             <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">{player.name}</h2>
//                 <p className="text-gray-600">{player.country}</p>
//                 <p className="mt-2 text-sm text-gray-500">
//                     <span className="font-semibold">Category:</span> {player.category}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                     <span className="font-semibold">Batting Type:</span> {player.batting_type}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                     <span className="font-semibold">Bowling Type:</span> {player.bowling_type}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2">
//                     <span className="font-semibold">Price:</span> ${player.price.toLocaleString()}
//                 </p>
//                 <div className="flex items-center mt-2">
//                     <span className="text-sm font-semibold text-gray-500">Rating:</span>
//                     <div className="ml-2 flex items-center">
//                         <div className="text-yellow-400">
//                             {Array.from({ length: Math.floor(player.rating) }, (_, i) => (
//                                 <span key={i}>&#9733;</span>
//                             ))}
//                         </div>
//                         <span className="ml-1 text-gray-600">({player.rating})</span>
//                     </div>
//                 </div>

//                 <button onClick={() => handleSelectPlayer(player)} className="bg-yellow-300 w-full rounded-lg px-4 py-1 mt-3 font-semibold">Select Player</button>
//             </div>
//         </div>
//     )
// }

// PlayerCard.propTypes = {
//     player: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         player_image: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         country: PropTypes.string.isRequired,
//         batting_type: PropTypes.string.isRequired,
//         bowling_type: PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired
//     }).isRequired,
//     handleSelectPlayer: PropTypes.func.isRequired,
// };


// export default PlayerCard


import PropTypes from 'prop-types';

const PlayerCard = ({ player, handleSelectPlayer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg p-3 md:p-5">
      <div className="w-full h-52 mb-3 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={player.player_image}
          alt={player.name}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800 truncate">{player.name}</h2>
        <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
          <p className="font-medium text-lg">{player.country}</p>
          <p className="bg-green-300 font-bold px-3 py-1 rounded-full text-black text-sm">{player.category}</p>
        </div>
        <hr className='mt-2'/>
        <div className="flex flex-col gap-2 text-md text-gray-500 mt-2">
          <p>
            <span className="font-semibold">Batting:</span> {player.batting_type}
          </p>
          <p>
            <span className="font-semibold">Bowling:</span> {player.bowling_type}
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center text-lg">
            <span className="text-yellow-400">
              {Array.from({ length: Math.floor(player.rating) }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </span>
            <span className="ml-1 text-gray-600">({player.rating})</span>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            ${player.price.toLocaleString()}
          </p>
        </div>
        <button
          onClick={() => handleSelectPlayer(player)}
          className="bg-yellow-300 w-full mt-3 py-2 rounded-lg font-semibold text-gray-800 transition-colors duration-300 hover:bg-orange-300"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    player_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    batting_type: PropTypes.string.isRequired,
    bowling_type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  handleSelectPlayer: PropTypes.func.isRequired,
};

export default PlayerCard;


