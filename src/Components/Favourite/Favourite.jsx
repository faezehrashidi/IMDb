import FetchAll from "../../hooks/fetchAll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Favourite.module.css";
import { Link } from "react-router-dom";
const Favourite = () => {
  const favourite = FetchAll("http://localhost:3000/Favourite");
  return (
    <>
      <section className={style.favourite}>
        <div className={style.head}>
          <div className={style.top}>
            <h2>Fan favorites</h2>
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
          <span>This week's top TV and movies</span>
        </div>
        <Swiper
          spaceBetween={5}
          className={style.favouriteSwiper}
          breakpoints={{
            400: {
              slidesPerView: 2.1,
            },
            600: {
              slidesPerView: 4.2,
            },
            1200: {
              slidesPerView: 6.1,
            },
          }}
        >
          {favourite?.map((elem) => {
            return (
              <SwiperSlide>
                <div className={style.card} key={elem.id}>
                  <img src={elem.src} alt={elem.alt} />
                  <div className={style.body}>
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
                        height="12px"
                        viewBox="0 -960 960 960"
                        width="12px"
                        fill="#5799ef"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </div>
                    <div className={style.text}>
                      <h2>{elem.name}</h2>
                      <div className={style.link}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#5799ef"
                        >
                          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                        </svg>
                        <Link href="#">Watchlist</Link>
                      </div>
                      <div className={style.bottom}>
                        <svg
                          viewBox="-3 0 28 28"
                          version="1.1"
                          width="12px"
                          height="12px"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                          fill="#fff"
                          stroke="#fff"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>play</title>{" "}
                            <desc>Created with Sketch Beta.</desc>{" "}
                            <defs> </defs>{" "}
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                              sketch:type="MSPage"
                            >
                              {" "}
                              <g
                                id="Icon-Set-Filled"
                                sketch:type="MSLayerGroup"
                                transform="translate(-419.000000, -571.000000)"
                                fill="#fff"
                              >
                                {" "}
                                <path
                                  d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                                  id="play"
                                  sketch:type="MSShapeGroup"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                        <span>Trailer</span>
                      </div>
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

export default Favourite;
