import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "./Popular.module.css";
import FetchAll from "../../hooks/fetchAll";
const Popular = () => {
  const popular = FetchAll("https://imdb-api-9fl7.onrender.com/Popular");
  return (
    <>
      <section className={style.popular}>
        <div className={style.head}>
          <h2>Popular interests</h2>
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
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          className={style.PopularSwiper}
          breakpoints={{
            600: {
              slidesPerView: 2.9,
            },
            1200: {
              slidesPerView: 4.1,
            },
          }}
        >
          {popular?.map((elem) => {
            return (
              <SwiperSlide>
                <div className={style.picture}>
                  <div className={style.top}>
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
                  </div>
                  <div className={style.bottom}>
                    <h2>{elem.name}</h2>
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

export default Popular;
