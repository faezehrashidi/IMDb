import style from "./InterviewOriginals.module.css";
const InterviewOriginals = () => {
  return (
    <>
      <section className={style.intervieworiginals}>
        <dis className={style.head}>
          <h2>Originals</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14px"
            viewBox="0 -960 960 960"
            width="14px"
            fill="#000"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </dis>
        <div className={style.body}>
          {" "}
          <p>
            Watch exclusive interviews of your favorite stars, catch up on the
            latest movies and shows, and discover your next viewing obsession.
          </p>
          <div className={style.cards}>
            <div className={style.card}>
              {" "}
              <img
                src="https://m.media-amazon.com/images/M/MV5BMzY0MzE3MjctYTViYS00YWI5LWIyMWMtMzgxNDFlMGFlZDRjXkEyXkFqcGdeQXRyZXdlcw@@._V1_QL75_UX1000_CR0,0,1000,563_.jpg"
                alt=""
              />
              <span>
                "It: Welcome to Derry" Cast, Crew Talk Childhood Nightmares and
                Weaponizing Fear
              </span>
            </div>
            <div className={style.card}>
              {" "}
              <img
                src="https://m.media-amazon.com/images/M/MV5BMGNlZDg3YzctMjA0MS00MTc2LTlhODYtZmNjZWYwMTAyMTY0XkEyXkFqcGdeQWZlZGVyaWdh._V1_QL75_UX500_CR0,0,500,281_.jpg"
                alt=""
              />
              <span>
                How 'Sentimental Value' Goes Beyond the Page to Mine
                Generational Trauma
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterviewOriginals;
