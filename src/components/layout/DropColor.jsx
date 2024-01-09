const DropColor = ({ title, color }) => {

  return (
    <div>
      <div className="flex text-[#767676] py-5 border-b items-center">
        <div className={`${color} w-3 h-3  rounded-full `}></div>
        <h2 className="text-base ms-4 capitalize"> {title}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default DropColor;
