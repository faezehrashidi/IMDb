import { useEffect, useState } from "react";
import style from "./ShowTopBoxTitle.module.css";
import { useNavigate, useParams } from "react-router-dom";
const ShowTopBoxTitle = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [showTopBoxTitle, setShowTopBoxTitle] = useState({
    src: "",
    alt: "",
    name: "",
    rate: "",
    weekSales: "",
    totalSales: "",
    releaseWeek: "",
  });
  const fetchOne = async () => {
    try {
      let res = await fetch(`http://localhost:3000/TopBoxTitle/${id}`);
      let data = await res.json();
      setShowTopBoxTitle({
        src: data.src,
        alt: data.alt,
        name: data.name,
        rate: data.rate,
        weekSales: data.wgroos,
        totalSales: data.tgroos,
        releaseWeek: data.wreleas,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchOne();
  }, [id]);
  return (
    <>
      <section className={style.showtopboxtitle}>
        {showTopBoxTitle && (
          <div className={style.product}>
            <img src={showTopBoxTitle.src} alt={showTopBoxTitle.alt} />
            <div className={style.info}>
              <h2>{showTopBoxTitle.name}</h2>
              <div className={style.rate}>
                <svg
                  viewBox="0 0 16 16"
                  width="24px"
                  height="24px"
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
                <span>{showTopBoxTitle.rate}</span>
              </div>
              <div className={style.sale}>
                <span>فروش هفتگی : {showTopBoxTitle.weekSales}</span>
                <span>فروش کل : {showTopBoxTitle.totalSales}</span>
                <span>هفته انتشار : {showTopBoxTitle.releaseWeek}</span>
              </div>
              <div className={style.btn}>
                <button
                  className={style.edit}
                  onClick={() => navigate(`/admin/edittopboxtitle/${id}`)}
                >
                  Edit
                </button>
                <button className={style.back} onClick={() => navigate(-1)}>
                  Back{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ShowTopBoxTitle;
