const Input = ({ label, id, onChange, type, ...props }) => {
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
                className="my-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                id={id}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                //  name={name}
                //  placeholder={placeholder || ""}
                //  required={required}
                {...props}
            />
        </div>
    );
};

export default Input;
