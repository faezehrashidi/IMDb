import style from "./Lanterns.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FetchAll from "../../hooks/fetchAll";
const Lanterns = () => {
  const lanterns = FetchAll("http://localhost:3000/Lanterns");
  return (
    <>
      <section className={style.lanterns}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={style.LanternsSwiper}
          breakpoints={{
            600: {
              slidesPerView: 2.2,
            },
            1200: {
              slidesPerView: 4.2,
            },
          }}
        >
          {lanterns?.map((elem) => {
            return (
              <SwiperSlide>
                <div className={style.card} key={elem.id}>
                  <img src={elem.src} alt={elem.alt} />
                  <div className={style.detail}>
                    <span className={style.section}>{elem.part}</span>
                    <span className={style.date}>{elem.date}</span>
                  </div>
                  <h2>
                    {elem.title}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 -960 960 960"
                      width="16px"
                      fill="#fff"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </h2>
                  <div className={style.rating}>
                    <span className={style.rat}>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        width="12px"
                        height="12px"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#f7eb18"
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
                            fill="#f7eb18"
                          ></path>{" "}
                        </g>
                      </svg>
                      {elem.rating}
                    </span>
                    <span className={style.score}>{elem.count}</span>
                  </div>
                  <p>{elem.description}</p>
                  <hr />
                  <h3>Your rating:</h3>
                  <div className={style.stars}>
                    {Array.from({ length: 10 }, (_, index) => (
                      <svg
                        key={index}
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808L19.7256 9.49336L16.8125 13.9154L17.5053 19.1064L12 17.56L6.49434 19.1064L7.4341 14.6757L3.82246 10.8832L8.77835 9.01795Z"
                          stroke="#e2e2e2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ))}
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

export default Lanterns;
