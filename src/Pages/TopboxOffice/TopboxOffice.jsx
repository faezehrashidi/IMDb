import TopBoxChart from "../../Components/TopBoxChart/TopBoxChart";
import TopBoxMovie from "../../Components/TopBoxMovie/TopBoxMovie";
import TopBoxOff from "../../Components/TopBoxOff/TopBoxOff";
import TopBoxRate from "../../Components/TopBoxRate/TopBoxRate";
import TopBoxTitle from "../../Components/TopBoxTitle/TopBoxTitle";

const TopBox = () => {
  return (
    <>
      <TopBoxOff />
      <TopBoxTitle />
      <TopBoxChart />
      <TopBoxMovie />
      <TopBoxRate />
    </>
  );
};

export default TopBox;
