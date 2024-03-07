const Button = ({ children, onClick }) => {
    return (
        <button
            className=" px-3 py-2 min-w-28  bg-sky-600 border-2 border-sky-600 hover:bg-transparent rounded-xl text-white hover:text-inherit transition-all duration-500"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
export default Button;
