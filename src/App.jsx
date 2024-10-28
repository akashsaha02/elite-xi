import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Players from './components/Players/Players';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleAddBalance = (amount) => {
    // Update balance
    setBalance((prevBalance) => prevBalance + amount);

    // Update transaction history
    setTransactionHistory([
      ...transactionHistory,
      {
        action: 'Added',
        amount: amount,
        time: new Date().toLocaleString(),
      },
    ]);
  };

  return (
    <div>
      <Header balance={balance} />
      <div className='lg:container mx-auto px-5'>
        <ToastContainer />
        <Hero
          balance={balance}
          setBalance={setBalance}
          transactionHistory={transactionHistory}
          setTransactionHistory={setTransactionHistory}
        />
        <Players
          balance={balance}
          setBalance={setBalance}
          transactionHistory={transactionHistory}
          setTransactionHistory={setTransactionHistory}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
