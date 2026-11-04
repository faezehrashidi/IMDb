import { Link } from "react-router-dom";
import style from "./TheatricalStreaming.module.css";
const TheatricalStreaming = () => {
  return (
    <>
      <section className={style.theatricalstreaming}>
        <div className={style.head}>
          <h2>Theatrical Releases You Can Now Watch at Home</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYWM5YTM3ZWMtZTBiYi00YjM2LWE4NmMtNzMzNjI4MTI4NzAzXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              Scary Movie, Backrooms, and Evil Dead Burn are just some of the
              big screen releases that you can watch from the comfort of your
              couch.
            </span>
            <Link to="#">See the list</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheatricalStreaming;
