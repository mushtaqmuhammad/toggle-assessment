import { APIBackend } from '../global/config/API';

export const getScore = async () => {
  try {
    const { data } = await APIBackend.get('score/');
    return data.score;
  } catch (error) {
    console.log(error.response);
  }
};

export const updateScore = async (willScoreIncrement) => {
  try {
    let value = await getScore();
    if (willScoreIncrement) {
      value += 1;
    } else {
      value -= 1;
    }
    const payload = { score: value };
    const { data } = await APIBackend.put('score/', payload);
    return data.score;
  } catch (error) {
    console.log(error.response);
  }
};

export const resetScore = async () => {
  try {
    const payload = { score: 0 };
    await APIBackend.put('score/', payload);
    return 0;
  } catch (error) {
    console.log(error);
  }
};

export const getScoreFromDB = async () => {
  try {
    const score = await getScore();
    return score;
  } catch (error) {
    console.log(error);
  }
};
