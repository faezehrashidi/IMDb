import FetchAll from "../../hooks/fetchAll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Current.module.css";
import { Link } from "react-router-dom";
const Current = () => {
  const current = FetchAll("https://imdb-api-9fl7.onrender.com/Current");
  return (
    <>
      <section className={style.current}>
        <div className={style.head}>
          <div className={style.first}>
            <h2>Current & upcoming TV shows</h2>
          </div>
          <span>From your Watchlist, ratings, and popular shows</span>
        </div>
        <Swiper
          slidesPerView={2.2}
          spaceBetween={10}
          className={style.CurrentSwiper}
          breakpoints={{
            600: {
              slidesPerView: 4.2,
            },
            1200: {
              slidesPerView: 6.1,
            },
          }}
        >
          {current?.map((elem) => {
            return (
              <SwiperSlide>
                <div className={style.product} key={elem.id}>
                  <div className={style.image}>
                    <img src={elem.src} alt={elem.alt} />
                  </div>
                  <div className={style.body}>
                    <div className={style.top}>
                      {" "}
                      <div className={style.rating}>
                        <svg
                          viewBox="0 0 16 16"
                          width="12px"
                          height="12px"
                          fill="none"
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
                              d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z"
                              fill="#f5c518"
                            ></path>{" "}
                          </g>
                        </svg>
                        <span>{elem.rate}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="14px"
                          viewBox="0 -960 960 960"
                          width="14px"
                          fill="#5799ef"
                        >
                          <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                        </svg>
                      </div>
                      <h2>{elem.name}</h2>
                    </div>
                    <div className={style.bottom}>
                      <div className={style.sec}>
                        <span className={style.part}>{elem.part}</span>
                        <span className={style.date}>{elem.date}</span>
                      </div>
                      <Link to="#">Watch options</Link>
                    </div>
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

export default Current;
