const PageSelect = ({title,select,mapItem}) => {
  return (
    <>
      <div className=" text-[#767676] sm:flex items-center text-base">
        <h3 className="w-[6rem]">{title}</h3>
      <select
        id="countries"
        className=" border w-full border-[#F0F0F0]  text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block  p-2 "
      >
        <option selected>{select}</option>
        {
          mapItem.map((item,i)=>(
            <option key={i} value="CA">{item.title}</option>
          ))
        }
      </select>
      </div>
    </>
  );
};

export default PageSelect;
