import PropTypes from "prop-types"
import PlayerCard from "../PlayerCard/PlayerCard"

const AvailablePlayers = ({players, handleSelectPlayer}) => {
  return (
  
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} handleSelectPlayer={handleSelectPlayer} />
      ))}
    </div>
  )
}

AvailablePlayers.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleSelectPlayer: PropTypes.func.isRequired,
};

export default AvailablePlayers
