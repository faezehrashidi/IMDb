import ImageOriginals from "../../Components/ImageOriginals/ImageOriginals";
import IMDbOriginals from "../../Components/IMDbOriginals/IMDbOriginals";
import InterviewOriginals from "../../Components/InterviewOriginals/InterviewOriginals";
import MoreOriginals from "../../Components/MoreOriginals/MoreOriginals";
import PictureOriginals from "../../Components/PictureOriginals/PictureOriginals";

const Originals = () => {
  return (
    <>
      <IMDbOriginals />
      <InterviewOriginals />
      <PictureOriginals />
      <ImageOriginals />
      <MoreOriginals />
    </>
  );
};

export default Originals;
