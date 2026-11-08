import style from "./Born.module.css";
import FetchAll from "../../hooks/fetchAll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Born = () => {
  const born = FetchAll("https://imdb-api-9fl7.onrender.com/Born");
  return (
    <>
      <section className={style.born}>
        <div className={style.explore}>
          <h3>More to explore</h3>
        </div>
        <div className={style.head}>
          <div className={style.fisrt}>
            <h2>Born today</h2>{" "}
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
            <span>People born on October 15</span>
          </div>
        </div>
        <Swiper
          className={style.BornSwiper}
          spaceBetween={5}
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
          {born?.map((elem) => {
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
                  <div className={style.detail}>
                    <h3>{elem.name}</h3>
                    <span>{elem.age}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Born;
