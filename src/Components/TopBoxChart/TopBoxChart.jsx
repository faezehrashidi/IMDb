import FetchAll from "../../hooks/fetchAll";
import style from "./TopBoxChart.module.css";
const TopBoxChart = () => {
  const topboxchart = FetchAll("http://localhost:3000/TopBoxChart");
  return (
    <>
      <section className={style.topboxchart}>
        <div className={style.head}>
          <h2>Popular charts</h2>
        </div>
        <div className={style.cards}>
          {topboxchart?.map((elem) => {
            return (
              <div className={style.card} key={elem.id}>
                <div className={style.body}>
                  <h2>{elem.title}</h2>
                  <span>{elem.des}</span>
                  <p>{elem.det}</p>
                </div>
                <img src={elem.src} alt={elem.alt} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TopBoxChart;
