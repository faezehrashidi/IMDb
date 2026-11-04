import { Link } from "react-router-dom";
import style from "./BlanketStreaming.module.css";
const BlanketStreaming = () => {
  return (
    <>
      <section className={style.blanketstreaming}>
        {" "}
        <div className={style.head}>
          <h2>My Fall Watchlist Is a Blanket I Should Wash</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYjI3NWIwYjMtMGVkYi00Njk0LTllZDctOGNjYTAwYzAxYTUxXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              Hey, hello. I'm Arno on the Editorial team at IMDb, and here are
              some balanced viewing suggestions for your medium agitation nights
              and days.
            </span>
            <Link to="#">See the recs</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlanketStreaming;
