import './style.css';

const Button = ({ text, handleClick, isDisabled }) => {
  return (
    <button disabled={isDisabled} onClick={handleClick} className='custom-btn'>
      {text}
    </button>
  );
};

export default Button;
