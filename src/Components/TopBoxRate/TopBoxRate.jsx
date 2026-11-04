import { Link } from "react-router-dom";
import style from "./TopBoxRate.module.css";
const TopBoxRate = () => {
  return (
    <>
      <section className={style.topboxrate}>
        <h2>Top rated movies by genre</h2>
        <div className={style.rate}>
          <Link to="#">Action</Link>
          <Link to="#">Adventure</Link>
          <Link to="#">Animation</Link>
          <Link to="#">Biography</Link>
          <Link to="#">Comedy</Link>
          <Link to="#">Crime</Link>
          <Link to="#">Documentary</Link>
          <Link to="#">Drama</Link>
          <Link to="#">Family</Link>
          <Link to="#">Fantasy</Link>
          <Link to="#">Film-Noir</Link>
          <Link to="#">History</Link>
          <Link to="#">Horror</Link>
          <Link to="#">Music</Link>
          <Link to="#">Musical</Link>
          <Link to="#">Mystery</Link>
          <Link to="#">Romance</Link>
          <Link to="#">Sci-Fi</Link>
          <Link to="#">Short</Link>
          <Link to="#">Sport</Link>
          <Link to="#">Thriller</Link>
          <Link to="#">War</Link>
          <Link to="#">Western</Link>
        </div>
      </section>
    </>
  );
};

export default TopBoxRate;
