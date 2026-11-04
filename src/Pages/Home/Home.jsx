import Banner from "../../Components/Banner/Banner";
import Born from "../../Components/Born/Born";
import Current from "../../Components/Current/Current";
import Favourite from "../../Components/Favourite/Favourite";
import Featured from "../../Components/Featured/Featured";
import Lanterns from "../../Components/Lanterns/Lanterns";
import News from "../../Components/News/News";
import Popular from "../../Components/Popular/Popular";
import Topbox from "../../Components/Topbox/Topbox";
import Topten from "../../Components/Topten/Topten";
import Trending from "../../Components/Trending/Trending";
import Watchlist from "../../Components/Watchlist/Watchlist";

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Lanterns />
      <Trending />
      <Watchlist />
      <Topten />
      <Favourite />
      <Popular />
      <Topbox />
      <Current />
      <Born />
      <News />
    </>
  );
};

export default Home;
