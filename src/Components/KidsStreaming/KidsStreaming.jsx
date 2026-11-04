import { Link } from "react-router-dom";
import style from "./KidsStreaming.module.css";
const KidsStreaming = () => {
  return (
    <>
      <section className={style.kidsstreaming}>
        <div className={style.head}>
          <h2>Animated Kids' Shows That Adults Love</h2>
        </div>
        <div className={style.body}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMDY1NDczMjctZTc2ZC00M2RmLWFlNjQtODlmNTNlNDcyN2M3XkEyXkFqcGc@._V1_QL75_UY563_CR0,0,1000,563_.jpg"
            alt=""
          />
          <div className={style.text}>
            {" "}
            <span>
              We rounded up the kids' animated shows that transcend all age
              targets thanks to their brilliant writing and amazing visuals,
              from Avatar: The Last Airbender
            </span>
            <Link to="#">See our picks</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default KidsStreaming;
