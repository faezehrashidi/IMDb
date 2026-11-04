import { Link } from "react-router-dom";
import style from "./AnimeStreaming.module.css";
const AnimeStreaming = () => {
  return (
    <>
      <section className={style.animestreaming}>
        {" "}
        <div className={style.head}>
          <h2>Crunchyroll's Fall 2026 Anime Lineup</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZGFmNGVmMDEtZDgyYy00NmNlLTlhZWYtZjcxYTJkZmYyMWI5XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              Get details on all the amazing series (subbed and dubbed!)
              streaming on Crunchyroll this fall.
            </span>
            <Link to="#">See the schedule</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimeStreaming;
