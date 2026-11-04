import { Link } from "react-router-dom";
import style from "./DatesStreaming.module.css";
const DatesStreaming = () => {
  return (
    <>
      <section className={style.datesstreaming}>
        <div className={style.head}>
          <h2>October 2026 TV and Streaming Premiere Dates</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZGUxNjU1ODctZTdjMy00ODk4LTk2MjYtMGQ1Mzk0NTZjZDUwXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              "East of Eden" gets a new adaptation on Netflix and so does
              "Carrie" over on Prime Video. Plus, the return of "Cyberpunk:
              Edgerunners," "The Diplomat," and more premieres coming this
              month.
            </span>
            <Link to="#">See the list</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DatesStreaming;
