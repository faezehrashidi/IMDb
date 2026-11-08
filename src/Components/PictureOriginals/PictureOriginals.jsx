import style from "./PictureOriginals.module.css";
import FetchAll from "../../hooks/fetchAll";
const PictureOriginals = () => {
  const pictureoriginals = FetchAll("https://imdb-api-9fl7.onrender.com/PictureOriginals");
  return (
    <>
      <section className={style.pictureoriginals}>
        <div className={style.cards}>
          {pictureoriginals?.map((elem) => {
            return (
              <div className={style.card}>
                <img src={elem.src} alt={elem.alt} />
                <span>{elem.title}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PictureOriginals;
