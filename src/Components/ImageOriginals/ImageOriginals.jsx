import style from "./ImageOriginals.module.css";
import FetchAll from "../../hooks/fetchAll";
const ImageOriginals = () => {
  const imageoriginals = FetchAll("https://imdb-api-9fl7.onrender.com/ImageOriginals");
  return (
    <>
      <section className={style.imageoriginals}>
        <div className={style.cards}>
          {imageoriginals?.map((elem) => {
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

export default ImageOriginals;
