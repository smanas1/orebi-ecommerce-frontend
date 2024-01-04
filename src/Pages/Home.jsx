import AdditionalInfo from "../components/AdditionalInfo";
import Advertise from "../components/Advertise";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import MiddleAdd from "../components/MiddleAdd";
import NewArrival from "../components/NewArrival";
import SpacialOffers from "../components/SpacialOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise/>
      <NewArrival/>
      <BestSeller/>
      <MiddleAdd/>
      <SpacialOffers/>
    </>
  );
};

export default Home;
