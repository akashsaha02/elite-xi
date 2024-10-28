import logo from '../../assets/logo.png'
import PropTypes from 'prop-types';
import coin from '../../assets/Currency.png'

const Header = ({ balance }) => {
    return (
        <div className="bg-white mb-4 md:mb-8 lg:mb-10 sticky top-0 w-full z-30 shadow-lg">
            <div className=" lg:container mx-auto px-5 flex justify-between items-center py-4 ">
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="Logo" className="w-12 md:w-16" />
                    <p className=' text-xl md:text-2xl lg:text-3xl font-bold hidden md:block'>Elite XI</p>
                </div>
                <div className="flex gap-4 sm:gap-6 lg:gap-10 items-center text-lg">
                    <p className="hidden md:block">Home</p>
                    <p className="hidden md:block">Fixture</p>
                    <p className="hidden md:block">Team</p>
                    <p className="hidden md:block">Schedules</p>
                    <button className="flex gap-2 items-center py-2 px-4 border rounded-xl font-bold">
                        <p>{balance.toLocaleString()} coin</p>
                        <img src={coin} className='w-6' alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    balance: PropTypes.number.isRequired,
};

export default Header;

