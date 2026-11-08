import { Link } from "react-router-dom";
import FetchAll from "../../hooks/fetchAll";
import DeleteTopBoxTitle from "../../Components/DeleteTopBoxTitle/DeleteTopBoxTitle";
import style from "./TopBoxTitleTable.module.css";
const TopBoxTitleTable = () => {
  const topboxtitletable = FetchAll("https://imdb-api-9fl7.onrender.com/TopBoxTitle");
  return (
    <>
      <section className={style.topboxtitletable}>
        <div className={style.head}>
          <div className={style.left}>
            <svg
              viewBox="0 0 26 26"
              width="34px"
              height="34px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
            >
              <g id="SVGRepo_bgCarrier" strokewidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokelinecap="round"
                strokelinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g fill="none" fill-rule="evenodd">
                  {" "}
                  <g transform="translate(1 1)">
                    {" "}
                    <path
                      d="M17.538 13.398c.973-.792 1.847-2.07 1.847-3.6 0-2.37-1.863-4.198-3.693-4.198-1.605 0-3.498 1.194-3.692 1.8-.194-.606-2.087-1.8-3.692-1.8-1.83 0-3.693 1.83-3.693 4.2 0 1.53.874 2.806 1.847 3.598l5.538 4.8 5.538-4.8zm.395.46l.014-.01-5.538 4.798L12 19l-.41-.354-5.523-4.787C4.817 12.84 4 11.376 4 9.8 4 7.206 6.034 5 8.308 5c1.68 0 3.96 1.22 4.28 2.22h-1.175c.32-1 2.598-2.22 4.28-2.22C17.965 5 20 7.207 20 9.8c0 1.577-.816 3.04-2.067 4.06z"
                      fill="#000"
                    ></path>{" "}
                    <rect
                      stroke="#000"
                      strokewidth="2"
                      width="24"
                      height="24"
                      rx="1"
                    ></rect>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <div className={style.title}>
              <h2>TopBoxTitleTable Table</h2>
              <span>List of users' favorite movies</span>
            </div>
          </div>
          <Link to="/admin/addtopBoxTitleTable">+ Add Movie</Link>
        </div>
        <div className={style.table}>
          <table>
            <thead>
              <tr>
                <th>تصویر</th>
                <th>نام فیلم</th>
                <th>فروش هفتگی</th>
                <th>فروش کل</th>
                <th>هفته انتشار</th>
                <th>امتیاز</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {topboxtitletable?.map((elem) => {
                return (
                  <tr key={elem.id}>
                    <td>
                      <Link to={`/admin/showtopboxtitle/${elem.id}`}>
                        <img src={elem.src} alt={elem.alt} />
                      </Link>
                    </td>
                    <td>
                      <h2>{elem.name}</h2>
                    </td>
                    <td>
                      <span>{elem.wgroos}</span>
                    </td>
                    <td>
                      <span>{elem.tgroos}</span>
                    </td>
                    <td>
                      <span>{elem.wreleas}</span>
                    </td>
                    <td>
                      <span>{elem.rate}</span>
                    </td>
                    <td>
                      <Link to={`/admin/edittopboxtitle/${elem.id}`}>Edit</Link>
                      <DeleteTopBoxTitle id={elem.id} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TopBoxTitleTable;
