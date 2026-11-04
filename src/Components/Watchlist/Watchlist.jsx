import { Link } from "react-router-dom";
import style from "./Watchlist.module.css";
const Watchlist = () => {
  return (
    <section className={style.watchlist}>
      <div className={style.text}>
        <h2>What to watch</h2>
        <div className={style.right}>
          <p>Get more recommendations</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14px"
            viewBox="0 -960 960 960"
            width="14px"
            fill="#5799ef"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </div>
      </div>
      <div className={style.part}>
        <div className={style.head}>
          <h2>From your Watchlist</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14px"
            viewBox="0 -960 960 960"
            width="14px"
            fill="#fff"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </div>
        <div className={style.body}>
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#fff"
              stroke-width="0.064"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 0H2V16H4L8 12L12 16H14V0ZM7 3V5H5V7H7V9H9V7H11V5H9V3H7Z"
                fill="#3b3b3b"
              ></path>{" "}
            </g>
          </svg>
          <div className={style.word}>
            <h4>Sign in to access your Watchlist</h4>
            <p>
              Save shows and movies to keep track of what you want to watch.
            </p>
          </div>
          <Link to="#">Sign in to IMDb</Link>
        </div>
      </div>
    </section>
  );
};

export default Watchlist;
