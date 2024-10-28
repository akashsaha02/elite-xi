import PropTypes from 'prop-types';

const PlayerFilters = ({
    searchCategory,
    setSearchCategory,
    searchTerm,
    setSearchTerm,
    setSortType,
}) => {
    return (
        <div className='flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 md:justify-between items-center py-4 md:py-6 transition-all duration-300 ease-in-out'>
            <div className='flex items-center border-2 border-yellow-500 rounded-lg justify-between shadow-sm font-semibold w-full overflow-hidden p-1'>

                <input
                    type='text'
                    placeholder={`Search by ${searchCategory}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='px-4 py-2 w-full md:w-96'
                />
                <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className='px-4 py-2 bg-yellow-300 border-gray-300 md:w-48 rounded-md'
                >
                    <option value='name'>Name</option>
                    <option value='country'>Country</option>
                    <option value='type'>Type</option>
                </select>
            </div>
            <div>
                <select
                    onChange={(e) => setSortType(e.target.value)}
                    className='px-4 py-2 sm:py-3 rounded-lg border border-gray-300 w-full md:w-48 shadow-sm bg-yellow-300 font-semibold'
                >
                    <option value='default'>Sort features</option>
                    <option value='price'>Sort by Price</option>
                    <option value='rating'>Sort by Rating</option>
                </select>
            </div>
        </div>
    );
};

PlayerFilters.propTypes = {
    availablePlayers: PropTypes.bool.isRequired,
    setAvailablePlayers: PropTypes.func.isRequired,
    searchCategory: PropTypes.string.isRequired,
    setSearchCategory: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    sortType: PropTypes.string.isRequired,
    setSortType: PropTypes.func.isRequired,
    selectedPlayerCount: PropTypes.number.isRequired,
};

export default PlayerFilters;
