import style from "./Featured.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import FetchAll from "../../hooks/fetchAll";
const Featured = () => {
  const featured = FetchAll("	https://imdb-api-9fl7.onrender.com/Featured");
  return (
    <>
      <section className={style.featured}>
        <h1>Featured today</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          freeMode={true}
          modules={[FreeMode]}
          className={style.FeaturedSwiper}
          breakpoints={{
            600: {
              slidesPerView: 2.2,
            },
            1040: {
              slidesPerView: 2.1,
            },
          }}
        >
          {featured?.map((elem) => {
            return (
              <SwiperSlide className={style.slide} key={elem.id}>
                <img src={elem.src} alt={elem.alt} />
                <h2>{elem.title}</h2>
                <Link to="#">{elem.href}</Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Featured;
