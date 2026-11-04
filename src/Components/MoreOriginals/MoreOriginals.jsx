import { Link } from "react-router-dom";
import style from "./MoreOriginals.module.css";
const MoreOriginals = () => {
  return (
    <>
      <section className={style.moreoriginals}>
        <div className={style.head}>
          <h2>More to explore</h2>
        </div>
        <div className={style.body}>
          <ul>
            <li>
              <Link to="#">All Events</Link>
            </li>
            <li>
              <Link to="#">Awards Central</Link>
            </li>
            <li>
              <Link to="#">Best Of</Link>
            </li>
            <li>
              <Link to="#">Family Entertainment Guide</Link>
            </li>
            <li>
              <Link to="#">Festival Central</Link>
            </li>
            <li>
              <Link to="#">IMDb Originals</Link>
            </li>
            <li>
              <Link to="#">IMDb Picks</Link>
            </li>
            <li>
              <Link to="#">IMDb STARmeter Awards</Link>
            </li>
            <li>
              <Link to="#">IMDb Spotlight</Link>
            </li>
            <li>
              <Link to="#">India Spotlight</Link>
            </li>
            <li>
              <Link to="#">Most Anticipated</Link>
            </li>
            <li>
              <Link to="#">San Diego Comic-Con</Link>
            </li>

            <li>
              <Link to="#">Scary Good</Link>
            </li>
            <li>
              <Link to="#">Star Wars </Link>
            </li>
            <li>
              <Link to="#">Superheroes </Link>
            </li>
            <li>
              <Link to="#">Video Games</Link>
            </li>
            <li>
              <Link to="#">What's on TV </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MoreOriginals;
