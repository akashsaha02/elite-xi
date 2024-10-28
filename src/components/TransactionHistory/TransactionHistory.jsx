import PropTypes from 'prop-types';

const TransactionHistory = ({ transactionHistory, balance }) => {
  return (
    <div className='mt-8'>
      <div className='bg-white p-4 rounded-lg shadow-md border'>
        <h2 className='text-xl font-bold mb-4 text-center'>Transaction History</h2>
        <hr  className='mb-2'/>
        {transactionHistory.length === 0 ? (
          <p className='text-gray-500'>No transactions yet.</p>
        ) : (
          <ul className='space-y-2'>
            {transactionHistory.map((transaction, index) => (
              <li key={index} className='flex justify-between'>
                <span>{transaction.time} - {transaction.action}</span>
                <span className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                </span>
              </li>
            ))}
          </ul>
        )}
        <hr className='my-4' />
        <div className='flex justify-between'>
          <span className='font-bold'>Total Balance</span>
          <span className='font-bold text-green-500'>${balance}</span>
        </div>
      </div>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.string.isRequired,
      player: PropTypes.string,
      amount: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  balance: PropTypes.number.isRequired,
};

export default TransactionHistory;
