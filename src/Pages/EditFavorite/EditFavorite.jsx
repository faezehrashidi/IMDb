import { useState, useEffect } from "react";
import style from "./EditFavorite.module.css";
import { useNavigate, useParams } from "react-router-dom";
const EditFavorite = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [editFavorite, setEditFavorite] = useState({
    src: "",
    alt: "",
    name: "",
    rate: "",
  });
  const fetchOne = async () => {
    let res = await fetch(`http://localhost:3000/Favourite/${id}`);
    let data = await res.json();
    console.log(data);
    setEditFavorite({
      src: data.src,
      alt: data.alt,
      name: data.name,
      rate: data.rate,
    });
  };
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setEditFavorite({
      ...editFavorite,
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
        const res = await fetch(`http://localhost:3000/Favourite/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            src: editFavorite.src,
            alt: editFavorite.alt,
            name: editFavorite.name,
            rate: editFavorite.rate,
          }),
        });
        if (!res.ok) {
          throw new Error("ذخیره تغییرات ناموفق بود");
        }

        navigate("/admin/favorite");
      } catch (error) {
        console.log(error.message);
      }
    };

    postOne();
  };
  return (
    <>
      <section className={style.editFavorite}>
        <h2>ویرایش فیلم</h2>
        <form onSubmit={submitHandler}>
          <label>نام فیلم</label>
          <input
            type="text"
            name="name"
            value={editFavorite.name}
            onChange={changeHandler}
          />

          <label>آدرس تصویر</label>
          <input
            type="text"
            name="src"
            value={editFavorite.src}
            onChange={changeHandler}
          />

          <label>امتیاز</label>
          <input
            type="number"
            name="rate"
            value={editFavorite.rate}
            onChange={changeHandler}
          />

          <button type="submit">ذخیره تغییرات</button>
        </form>
      </section>
    </>
  );
};

export default EditFavorite;
