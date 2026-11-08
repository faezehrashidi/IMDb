import FetchAll from "../../hooks/fetchAll";
import style from "./TopBoxMovie.module.css";
const TopBoxMovie = () => {
  const topboxmovie = FetchAll("https://imdb-api-9fl7.onrender.com/TopBoxMovie");
  return (
    <>
      <section className={style.topboxmovie}>
        <div className={style.head}>
          <h2>Movie news</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="rgba(0, 0, 0, 0.5)"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </div>
        <div className={style.cards}>
          {topboxmovie?.map((elem) => {
            return (
              <div className={style.card} key={elem.id}>
                <div className={style.body}>
                  <h2>{elem.des}</h2>
                  <div className={style.detail}>
                    <span>{elem.date}</span>
                    <p>{elem.det}</p>
                  </div>
                </div>
                <img src={elem.src} alt={elem.alt} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopBoxMovie;
