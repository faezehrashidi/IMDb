import { useState } from "react";
import style from "./AddFavorite.module.css";
import { useNavigate } from "react-router-dom";
const AddFavorite = () => {
  let navigate = useNavigate();
  const [favorite, setFavorite] = useState({
    src: "",
    alt: "",
    name: "",
    rate: "",
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setFavorite({
      ...favorite,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const postfavorite = async () => {
        await fetch("https://imdb-api-9fl7.onrender.com/Favourite", {
          method: "POST",
          body: JSON.stringify({
            name: favorite.name,
            src: favorite.src,
            rate: favorite.rate,
          }),
        });
      };
      await postfavorite();
      navigate("./../");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <section className={style.addfavorite}>
        <h2>Add New Movie</h2>
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="name">Movie Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={changeHandler}
            required
            placeholder="please wrtie name"
          />

          <label htmlFor="src">Movie Image</label>
          <input
            type="text"
            id="src"
            name="src"
            onChange={changeHandler}
            required
            placeholder="please insert src"
          />
          <label htmlFor="rate">Movie Rate</label>
          <input
            type="number"
            id="rate"
            name="rate"
            onChange={changeHandler}
            required
            min="0"
            max="10"
            step="0.1"
            placeholder="please wrtie rate"
          />
          <button type="submit">Add Movie</button>
        </form>
      </section>
    </>
  );
};

export default AddFavorite;
