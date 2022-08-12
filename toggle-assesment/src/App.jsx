import { useEffect, useState } from 'react';

import { Button, Score } from './global/components';
import { updateScore, getScoreFromDB, resetScore } from './services/score';
import { getBTCPrice } from './services/BTC';
import { REQUEST_TIMEOUT } from './global/constants/constants';

import './App.css';

const localValue = localStorage.getItem('value');

const App = () => {
  const [currentPrice, setCurrentPrice] = useState(
    localValue ? parseFloat(localValue) : 0
  );
  const [willIcrement, setWillIncrement] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const handleClick = (num) => {
    setDisableButton(true);
    if (num) {
      setWillIncrement(true);
    } else {
      setWillIncrement(false);
    }
    setTimeout(() => handleEnableButton(num), REQUEST_TIMEOUT);
  };

  const handleEnableButton = async (increment) => {
    setDisableButton(false);
    const value = await getBTCPrice();

    if (increment && value > currentPrice) {
      alert('Good Job');
      const score = await updateScore(true);
      setUserScore(score);
      setCurrentPrice(value);
    } else if (!increment && value < currentPrice) {
      alert('Good Job');
      const score = await updateScore(true);
      setUserScore(score);
      setCurrentPrice(value);
    } else if (value === currentPrice) {
      alert('Draw');
    } else {
      alert('Wrong Choice');
      const score = await updateScore(false);
      setUserScore(score);
    }
  };

  const handleReset = async () => {
    const value = await resetScore();
    setUserScore(value);
  };

  useEffect(() => {
    const fetch = async () => {
      const initialValue = await getBTCPrice();
      setCurrentPrice(initialValue);
    };

    !localValue && fetch();
    getScoreFromDB().then((value) => setUserScore(value));
  }, []);

  return (
    <div className='page-wrapper'>
      <h3>Current BitCoin Price: {currentPrice}</h3>
      <Score score={userScore} />
      <div>
        <h3 style={{ textAlign: 'center' }}>Predict Price of Bitcoin</h3>
        <Button
          text='Increase'
          handleClick={() => handleClick(1)}
          isDisabled={disableButton}
        />
        <Button
          text='Decrease'
          handleClick={() => handleClick(0)}
          isDisabled={disableButton}
        />
        <Button
          text='Reset '
          handleClick={handleReset}
          isDisabled={disableButton}
        />
      </div>
    </div>
  );
};

export default App;
