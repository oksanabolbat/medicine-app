const Input = ({ label, id, name, placeholder, type }) => {
    return (
        <div className="col-span-12">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                type={type || "text"}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                id={id}
                name={name}
                placeholder={placeholder || ""}
            />
        </div>
    );
};

export default Input;