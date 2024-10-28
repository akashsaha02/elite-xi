import PropTypes from 'prop-types';
import SelectedPlayerCard from './../SelectedPlayerCard/SelectedPlayerCard';
import Checkout from '../Checkout/Checkout';


const SelectedPlayers = ({ selectedPlayers, deletePlayer, setAvailablePlayers, setShowFilters}) => {


  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-12 md:col-span-8'>
        <SelectedPlayerCard selectedPlayers={selectedPlayers} deletePlayer={deletePlayer} setAvailablePlayers={setAvailablePlayers} setShowFilters={setShowFilters}/>
      </div>
      <div className='col-span-12 md:col-span-4'>
        <Checkout selectedPlayers={selectedPlayers} />
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  deletePlayer: PropTypes.func.isRequired,
  setAvailablePlayers: PropTypes.func.isRequired,
  setShowFilters: PropTypes.func.isRequired,
};

export default SelectedPlayers;