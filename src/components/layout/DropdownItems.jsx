const DropdownItems = ({ title }) => {
  return (
    <div>
      <div className="flex justify-between py-5 border-b items-center">
        <h2 className="text-base  text-[#767676] capitalize"> {title}</h2>
      </div>
      <div></div>
    </div>
  );
};

export default DropdownItems;
