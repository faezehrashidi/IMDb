import { Link } from "react-router-dom";
import style from "./PrimeStreaming.module.css";
const PrimeStreaming = () => {
  return (
    <>
      <section className={style.primestreaming}>
        {" "}
        <div className={style.head}>
          <h2>Everything New on Prime Video in September</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMWEwNzA3M2YtMmZiNS00M2M5LWE0NjAtODM0MGNkNzAxYzc4XkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              Your guide to all the new movies and shows streaming on Prime
              Video in the US this month.
            </span>
            <Link to="#">See the list</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrimeStreaming;
