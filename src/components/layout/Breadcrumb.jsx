const Breadcrumb = ({ title, path }) => {
  return (
    <div className="lg:my-20 my-10">
      <h1 className="md:text-5xl text-3xl text-primary font-bold">{title}</h1>
      <p className="text-sm text-[#767676] mt-3">
        HOME {">"} {path}{" "}
      </p>
    </div>
  );
};

export default Breadcrumb;
