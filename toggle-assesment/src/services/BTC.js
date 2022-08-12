import { API } from '../global/config/API';

export const getBTCPrice = async () => {
  const {
    data: { rates },
  } = await API.get('rates');
  const { BTC } = rates;
  localStorage.setItem('value', BTC);
  return BTC;
};
