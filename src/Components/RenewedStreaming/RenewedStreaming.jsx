import { Link } from "react-router-dom";
import style from "./RenewedStreaming.module.css";
const RenewedStreaming = () => {
  return (
    <>
      <section className={style.renewedstreaming}>
        <div className={style.head}>
          <h2>Renewed, Canceled, or Ending?</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BOWM2ZGFhMzUtMDEwMC00MjVkLTkwZjItZjRiMTEyZGNlYTBhXkEyXkFqcGc@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              Check out our list of renewals and cancellations to see if your
              favorite show made the cut.
            </span>
            <Link to="#">Check the status</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RenewedStreaming;
