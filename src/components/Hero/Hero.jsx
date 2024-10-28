import heroImg from '../../assets/banner-main.png';
import { toast } from 'react-toastify';
import heroBg from '../../assets/bg-shadow.png';
import PropTypes from 'prop-types';

const Hero = ({ balance, setBalance, transactionHistory, setTransactionHistory }) => {
  const freeCredit = () => {
    const creditAmount = 10000000;

    // Update balance
    setBalance((prevBalance) => prevBalance + creditAmount);

    // Update transaction history
    setTransactionHistory([
      ...transactionHistory,
      {
        action: 'Free Credit',
        amount: creditAmount,
        time: new Date().toLocaleString(),
      },
    ]);

    // Show success toast
    toast.success(`${creditAmount} credit added to your account`, {
      position: 'top-center',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className={`bg-gray-900 bg-cover bg-center rounded-xl flex flex-col justify-center items-center py-20 px-5 text-white mx-auto text-center`}
    >
      <div>
        <img src={heroImg} alt="Hero" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold my-5">
        Assemble Your Ultimate Elite XI Cricket Team
      </h1>
      <p className="text-gray-200 text-lg md:text-xl">Beyond Boundaries Beyond Limits</p>
      <div className="p-2 border border-yellow-400 mt-5 rounded-2xl bg-transparent">
        <button
          onClick={freeCredit}
          className="bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 from-pink-500 to-yellow-500 rounded-xl px-6 py-2 text-lg font-semibold text-black"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

Hero.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
  transactionHistory: PropTypes.array.isRequired,
  setTransactionHistory: PropTypes.func.isRequired,
};

export default Hero;
