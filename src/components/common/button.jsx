export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  className = ''
}) => {
  const variants = {
    primary: 'bg-red-500 hover:bg-red-600 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    text: 'text-red-500 hover:text-red-400',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} font-semibold py-3 px-4 rounded-lg transition-colors ${className}`}
    >
      {children}
    </button>
  );
};