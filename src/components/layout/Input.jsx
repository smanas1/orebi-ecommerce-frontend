const Input = ({ title, type }) => {
  return (
    <div className="mt-6 w-full">
      <label className="text-lg font-bold " htmlFor={title}>
        {title}
      </label>
      <input
        className="w-full py-2 outline-none border-b text-gray-600 "
        type={type}
        placeholder={`Your ${title} Here`}
        name={title}
      />
    </div>
  );
};

export default Input;
