import { useState, useEffect } from "react";
import style from "./EditTrending.module.css";
import { useNavigate, useParams } from "react-router-dom";
const EditTrending = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [editTrending, setEditTrending] = useState({
    src: "",
    alt: "",
    title: "",
    rank: "",
    change: "",
  });
  const fetchOne = async () => {
    let res = await fetch(`https://imdb-api-9fl7.onrender.com/Trending/${id}`);
    let data = await res.json();
    console.log(data);
    setEditTrending({
      src: data.src,
      alt: data.alt,
      title: data.title,
      rank: data.rank,
      change: data.change,
    });
  };
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setEditTrending({
      ...editTrending,
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
        const res = await fetch(`https://imdb-api-9fl7.onrender.com/Trending/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            src: editTrending.src,
            alt: editTrending.alt,
            title: editTrending.title,
            rank: editTrending.rank,
            change: editTrending.change,
          }),
        });
        if (!res.ok) {
          throw new Error("ذخیره تغییرات ناموفق بود");
        }

        navigate("/admin/trending");
      } catch (error) {
        console.log(error.message);
      }
    };

    postOne();
  };
  return (
    <>
      <section className={style.edittrending}>
        <h2>ویرایش فیلم</h2>
        <form onSubmit={submitHandler}>
          <label>نام فیلم</label>
          <input
            type="text"
            name="title"
            value={editTrending.title}
            onChange={changeHandler}
          />

          <label>آدرس تصویر</label>
          <input
            type="text"
            name="src"
            value={editTrending.src}
            onChange={changeHandler}
          />

          <label>امتیاز</label>
          <input
            type="number"
            name="rank"
            value={editTrending.rank}
            onChange={changeHandler}
          />
          <label>آمار</label>
          <input
            type="text"
            name="change"
            value={editTrending.change}
            onChange={changeHandler}
          />

          <button type="submit">ذخیره تغییرات</button>
        </form>
      </section>
    </>
  );
};

export default EditTrending;
