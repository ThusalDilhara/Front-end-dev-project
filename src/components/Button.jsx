
const Button = ({ text, onClick, disabled }) => {
  return (
    <button 
      className="bg-secondary rounded-[4px] px-4 py-2 font-bold cursor-pointer" 
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default Button;
