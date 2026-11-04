import { Link } from "react-router-dom";
import style from "./FallStreaming.module.css";
const FallStreaming = () => {
  return (
    <>
      <section className={style.fallstreaming}>
        <div className={style.head}>
          <h2>Top Fall TV Picks</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNTc3M2JiY2UtYWU3NC00ZjU3LTlmNjQtODE3YTA5MTVhM2YyXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            <span>
              See our guide of the biggest Fall TV and streaming releases.
            </span>
            <Link to="#">See the watch guide</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FallStreaming;
