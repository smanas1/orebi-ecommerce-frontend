import { aboutData, aboutImage } from "../Data/aboutData";
import Breadcrumb from "../components/layout/Breadcrumb";

const About = () => {
  return (
    <>
      <div className="container font-DM">
        <Breadcrumb
          title="About"
          path={window.location.pathname.split("/")[1].toUpperCase()}
        />
        <div className="grid grid-cols-2 gap-10">
          {aboutImage.map((item, i) => (
            <img key={i} src={item.img} alt="about image" />
          ))}
        </div>
        <div className="my-24 ">
          <h2 className=" text-2xl md:text-4xl max-md:text-center text-primary">
            Orebi is one of the worlds leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-md:text-center gap-10 mb-6">
          {aboutData.map((item, i) => (
            <div key={i}>
              <h3 className="text-primary text-xl font-bold">{item.title}</h3>
              <p className="text-[#767676] text-base">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
