import { Link, Outlet } from "react-router-dom";
import style from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <section className={style.admindashboard}>
      <div className={style.sidebar}>
        <ul>
          <li>
            <Link to="/admin/favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/admin/topboxtitle">TopBoxTitle</Link>
          </li>
          <li>
            <Link to="/admin/trending">Trending</Link>
          </li>
        </ul>
      </div>
      <div className={style.mainContent}>
        <Outlet />
      </div>
    </section>
  );
};

export default AdminDashboard;
