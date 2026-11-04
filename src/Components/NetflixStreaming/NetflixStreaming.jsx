import { Link } from "react-router-dom";
import style from "./NetflixStreaming.module.css";
const NetflixStreaming = () => {
  return (
    <>
      <section className={style.netflixstreaming}>
        <div className={style.head}>
          <h2>Everything New on Netflix in October</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYjJkYWViNDctOGM4My00MGI1LWE2MGItMTQzOTVjMjc1YmU1XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              Your guide to all the new movies and shows streaming on Netflix in
              the US this month.
            </span>
            <Link to="#">See the calendar</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NetflixStreaming;
