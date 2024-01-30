const Input = ({ title, type }) => {
  return (
    <div className="mt-6">
      <label className="text-xl font-bold " htmlFor={title}>
        {title}
      </label>
      <input
        className="w-full py-2 outline-none border-b"
        type={type}
        placeholder={`Your ${title} Here`}
        name={title}
      />
    </div>
  );
};

export default Input;
