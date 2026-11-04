import FetchAll from "../../hooks/fetchAll";
import style from "./Topbox.module.css";
const Topbox = () => {
  const topbox = FetchAll("http://localhost:3000/Topbox");
  return (
    <>
      <section className={style.topbox}>
        <div className={style.top}>
          <div className={style.one}>
            <h2>Explore what’s streaming</h2>
            <div className={style.oneo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#007aff"
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
              </svg>
              <span>Set your preferred services</span>
            </div>
          </div>
          <div className={style.two}>
            <h2>Explore movies & TV shows</h2>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.head}>
            <div className={style.first}>
              <h2>Top box office (US)</h2>
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
            <span>Weekend of October 9-11</span>
          </div>
        </div>
        <div className={style.tab}>
          {" "}
          {topbox?.map((elem) => {
            return (
              <div className={style.product} key={elem.id}>
                <span>{elem.number}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35px"
                  viewBox="0 -960 960 960"
                  width="45px"
                  fill="#f5f4f478"
                >
                  <path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
                </svg>
                <div className={style.text}>
                  <h2>{elem.name}</h2>
                  <div className={style.report}>
                    <span>{elem.seen} .</span>
                    <span>{elem.total}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Topbox;
