import { useState, useEffect } from "react";
import style from "./EditTopBoxTitle.module.css";
import { useNavigate, useParams } from "react-router-dom";
const EditTopBoxTitle = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [editTopBoxTitle, setEditTopBoxTitle] = useState({
    src: "",
    alt: "",
    name: "",
    rate: "",
    weekSales: "",
    totalSales: "",
    releaseWeek: "",
  });
  const fetchOne = async () => {
    let res = await fetch(`http://localhost:3000/TopBoxTitle/${id}`);
    let data = await res.json();
    console.log(data);
    setEditTopBoxTitle({
      src: data.src,
      alt: data.alt,
      name: data.name,
      rate: data.rate,
      weekSales: data.wgroos,
      totalSales: data.tgroos,
      releaseWeek: data.wreleas,
    });
  };
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setEditTopBoxTitle({
      ...editTopBoxTitle,
      [name]: value,
    });
  };
  useEffect(() => {
    fetchOne();
  }, [id]);
  const submitHandler = async (e) => {
    e.preventDefault();
    const postOne = async () => {
      try {
        const res = await fetch(`http://localhost:3000/TopBoxTitle/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            src: editTopBoxTitle.src,
            alt: editTopBoxTitle.alt,
            name: editTopBoxTitle.name,
            rate: editTopBoxTitle.rate,
            wgroos: editTopBoxTitle.weekSales,
            tgroos: editTopBoxTitle.totalSales,
            wreleas: editTopBoxTitle.releaseWeek,
          }),
        });
        if (!res.ok) {
          throw new Error("ذخیره تغییرات ناموفق بود");
        }

        navigate("/admin/topboxtitle");
      } catch (error) {
        console.log(error.message);
      }
    };

    postOne();
  };
  return (
    <>
      <section className={style.edittopboxtitle}>
        <h2>ویرایش فیلم</h2>
        <form onSubmit={submitHandler}>
          <label>نام فیلم</label>
          <input
            type="text"
            name="name"
            value={editTopBoxTitle.name}
            onChange={changeHandler}
          />

          <label>آدرس تصویر</label>
          <input
            type="text"
            name="src"
            value={editTopBoxTitle.src}
            onChange={changeHandler}
          />

          <label>امتیاز</label>
          <input
            type="number"
            name="rate"
            value={editTopBoxTitle.rate}
            onChange={changeHandler}
          />

          <label>فروش هفتگی</label>
          <input
            type="text"
            name="weekSales"
            value={editTopBoxTitle.weekSales}
            onChange={changeHandler}
          />

          <label>فروش کل</label>
          <input
            type="text"
            name="totalSales"
            value={editTopBoxTitle.totalSales}
            onChange={changeHandler}
          />

          <label>هفته انتشار</label>
          <input
            type="number"
            name="releaseWeek"
            value={editTopBoxTitle.releaseWeek}
            onChange={changeHandler}
          />

          <button type="submit">ذخیره تغییرات</button>
        </form>
      </section>
    </>
  );
};

export default EditTopBoxTitle;
