const Breadcrumb = ({ title, path }) => {
  return (
    <div className="my-32">
      <h1 className="text-5xl text-primary font-bold">{title}</h1>
      <p className="text-sm text-[#767676] mt-3">
        HOME {">"} {path}{" "}
      </p>
    </div>
  );
};

export default Breadcrumb;
