import { useState, useEffect } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import PlayerFilters from '../PlayerFilters/PlayerFilters';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const Players = ({ balance, setBalance, setTransactionHistory, transactionHistory }) => {
  const [players, setPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [searchCategory, setSearchCategory] = useState('name'); // New state for search category
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('default');
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const handleSelectPlayer = (player) => {
    if (balance <= 0 || balance < player.price) {
      toast.error('Insufficient balance', { position: 'top-center', autoClose: 2000 });
      return;
    }
    if (selectedPlayers.length < 6) {
      if (selectedPlayers.find((selectedPlayer) => selectedPlayer.id === player.id)) {
        toast.error('Player already selected', { position: 'top-center', autoClose: 2000 });
        return;
      }
      setBalance(balance - player.price);
      setSelectedPlayers([...selectedPlayers, player]);
      setTransactionHistory([
        ...transactionHistory,
        { action: 'Selected', player: player.name, amount: -player.price, time: new Date().toLocaleString() },
      ]);
      toast.success('Player selected successfully', { position: 'top-center', autoClose: 2000 });
    } else {
      toast.error('You can select only 6 players', { position: 'top-center', autoClose: 2000 });
    }
  };

  const deletePlayer = (id, price) => {
    const removedPlayer = selectedPlayers.find((selectedPlayer) => selectedPlayer.id === id);
    setBalance(balance + price);
    setSelectedPlayers(selectedPlayers.filter((selectedPlayer) => selectedPlayer.id !== id));
    setTransactionHistory([
      ...transactionHistory,
      { action: 'Removed', player: removedPlayer.name, amount: price, time: new Date().toLocaleString() },
    ]);
    toast.error('Player removed successfully', { position: 'top-center', autoClose: 2000 });
  };

  const filteredPlayers = players
    .filter((player) => {
      if (searchCategory === 'name') {
        return player.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (searchCategory === 'country') {
        return player.country.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (searchCategory === 'type') {
        return player.category.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true; // Default case
    })
    .sort((a, b) => {
      if (sortType === 'price') {
        return b.price - a.price;
      } else if (sortType === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className='my-5 md:mt-10 md:mb-48'>
      {
        showFilters && (
          <PlayerFilters
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setSortType={setSortType}
          />
        )
      }
      <div className='flex flex-col sm:flex-row justify-center gap-3 sm:justify-between items-center py-4 md:py-6'>
        <h1 className='text-xl md:text-2xl font-bold'>
          {availablePlayers ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => {
              setAvailablePlayers(true);
              setShowFilters(true);
            }}
            className={`px-4 py-2 font-semibold rounded-s-lg ${availablePlayers ? 'bg-yellow-300' : 'bg-gray-200'}`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setAvailablePlayers(false);
              setShowFilters(false);
            }}
            className={`px-4 py-2 font-semibold rounded-e-lg ${!availablePlayers ? 'bg-yellow-300' : 'bg-gray-200'}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {
        availablePlayers ? (
          <AvailablePlayers players={filteredPlayers} handleSelectPlayer={handleSelectPlayer} />
        ) : (
          <SelectedPlayers
            setAvailablePlayers={setAvailablePlayers}
            selectedPlayers={selectedPlayers}
            deletePlayer={deletePlayer}
            setShowFilters={setShowFilters}
          />
        )
      }

      {!showFilters && (
        <TransactionHistory transactionHistory={transactionHistory} balance={balance} />
      )}

    </div >
  );
};

Players.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
  setTransactionHistory: PropTypes.func.isRequired,
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.string.isRequired,
      player: PropTypes.string,
      amount: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Players;
