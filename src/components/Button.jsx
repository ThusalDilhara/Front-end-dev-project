
const Button = ({ text, onClick, disabled }) => {
  return (
    <button 
      className="bg-[#F28D35] text-white hover:bg-orange-600 rounded-[4px] px-4 py-2 font-bold" 
      onClick={onClick} 
    >
      {text}
    </button>
  );
};

export default Button;
