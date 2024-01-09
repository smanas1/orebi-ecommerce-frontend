const ItemSelect = ({ title, setValue }) => {
  const handleCHange = (e) => {
    setValue(+e.target.value);
  };
  return (
    <>
      <div className=" text-[#767676] sm:flex items-center text-base">
        <h3 className="w-[6rem]">{title}</h3>
        <select
          defaultValue={"DEFAULT"}
          id="countries"
          className=" border w-full border-[#F0F0F0]  text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block  p-2 "
          onChange={(e) => handleCHange(e)}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
        </select>
      </div>
    </>
  );
};

export default ItemSelect;
