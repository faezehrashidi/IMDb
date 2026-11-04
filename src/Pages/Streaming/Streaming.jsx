import AnimeStreaming from "../../Components/AnimeStreaming/AnimeStreaming";
import BlanketStreaming from "../../Components/BlanketStreaming/BlanketStreaming";
import DatesStreaming from "../../Components/DatesStreaming/DatesStreaming";
import FallStreaming from "../../Components/FallStreaming/FallStreaming";
import KidsStreaming from "../../Components/KidsStreaming/KidsStreaming";
import MoreStreaming from "../../Components/MoreStreaming/MoreStreaming";
import NetflixStreaming from "../../Components/NetflixStreaming/NetflixStreaming";
import PrimeStreaming from "../../Components/PrimeStreaming/PrimeStreaming";
import RenewedStreaming from "../../Components/RenewedStreaming/RenewedStreaming";
import TheatricalStreaming from "../../Components/TheatricalStreaming/TheatricalStreaming";
import WhatsStreaming from "../../Components/WhatsStreaming/WhatsStreaming";

const Streaming = () => {
  return (
    <>
      <WhatsStreaming />
      <FallStreaming />
      <DatesStreaming />
      <NetflixStreaming />
      <AnimeStreaming />
      <BlanketStreaming />
      <PrimeStreaming />
      <RenewedStreaming />
      <TheatricalStreaming />
      <KidsStreaming />
      <MoreStreaming />
    </>
  );
};

export default Streaming;
