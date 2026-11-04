import style from "./Trending.module.css";
import FetchAll from "../../hooks/fetchAll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Trending = () => {
  const trending = FetchAll("http://localhost:3000/Trending");
  return (
    <>
      <section className={style.trending}>
        <div className={style.head}>
          <h2>Trending people</h2>{" "}
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
        <div className={style.text}>
          {" "}
          <span>TOP RISING</span>
          <span>BY RANKING</span>
        </div>
        <Swiper
          className={style.trendingSwiper}
          slidesPerView={2.2}
          breakpoints={{
            600: {
              slidesPerView: 4.2,
            },
            1200: {
              slidesPerView: 6.1,
            },
          }}
        >
          {trending?.map((elem) => {
            return (
              <SwiperSlide>
                <div className={style.picture} key={elem.id}>
                  <img src={elem.src} alt={elem.alt} />
                  <button>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      width="20px"
                      height="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M4 12H20M12 4V20"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                  <div className={style.rank}>
                    <span>{elem.rank}</span>
                    <span>{elem.change}</span>
                  </div>
                  <h2>{elem.title}</h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Trending;
