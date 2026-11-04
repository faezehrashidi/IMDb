import FetchAll from "../../hooks/fetchAll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./News.module.css";
const News = () => {
  const news = FetchAll("http://localhost:3000/News");
  return (
    <>
      <section className={style.news}>
        <div className={style.head}>
          <h2>Top news</h2>
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
        <div className={style.firstcard}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYzEyZjYyZDUtMzQwMy00OGJlLWJhOTktZjhmNWNlNGM5YzVkXkEyXkFqcGc@._V1_QL75_UY266_CR147,0,180,266_.jpg"
            alt="firstcard"
          />
          <div className={style.text}>
            <h2>
              IMDb’s Top 10 Stars of the Week: Florence Pugh, Summer H. Howell,
              Mike Flanagan, and More
            </h2>
            <p>
              Riding the wave of interest in Netflix’s mini-series “East of
              Eden,” Florence Pugh is the most popular star of the week on IMDb.
              Her co-stars Christopher Abbott and Mike Faist — who play the
              Trask brothers in the John Steinbeck adaptation — also made the
              top 10. Mike Flanagan’s “Carrie,” based on the classic Stephen
              King novel, was also well represented in the top 10, with star
              Summer H. Howell, Samantha Sloyan, and Alison Thornton making the
              list. Notably, Flanagan himself is at #6 this week, thanks to the
              success of the Prime Video series as well as the trailer drop for
              his upcoming The Exorcist: Martyrs, starring Scarlett Johansson.
              Here are the most popular stars on IMDb for the week ending
              October 10, 2026: 1. Florence Pugh 2. Summer H. Howell 3. Josh
              Hartnett 4. Christopher Abbott 5. Ella Beatty 6. Mike Flanagan 7.
              Mackenzie Davis 8. Samantha Sloyan 9. Mike Faist 10. Alison
              Thornton See the full list of trending stars on IMDb
              (/chart/starmeter/).
            </p>
            <div className={style.bottom}>
              {" "}
              <span>Oct 13</span>
              <span>IMDb News</span>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={0}
          className={style.NewsSwiper}
          breakpoints={{
            600: {
              slidesPerView: 1.2,
            },
          }}
        >
          {news?.map((elem) => {
            return (
              <SwiperSlide>
                <div className={style.card}>
                  <img src={elem.src} alt={elem.alt} />
                  <div className={style.body}>
                    <h2>{elem.description}</h2>
                    <div className={style.detail}>
                      <span>{elem.date}</span>
                      <span>{elem.name}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={style.tab}>
          <div className={style.more}>
            <h2>MORE NEWS</h2>
            <div className={style.text}>
              <span>Top news</span>
              <span>Celebrity news</span>
              <span>Movie news</span>
              <span>Indie news</span>
              <span>TV news</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
