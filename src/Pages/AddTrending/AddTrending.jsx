import { useState } from "react";
import style from "./AddTrending.module.css";
import { useNavigate } from "react-router-dom";
const AddTrending = () => {
  let navigate = useNavigate();
  const [trending, setTrending] = useState({
    src: "",
    title: "",
    rank: "",
    change: "",
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setTrending({
      ...trending,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const posttrending = async () => {
        await fetch("https://imdb-api-9fl7.onrender.com/Trending", {
          method: "POST",
          body: JSON.stringify({
            title: trending.title,
            src: trending.src,
            rank: trending.rank,
            change: trending.change,
          }),
        });
      };
      await posttrending();
      navigate("./../");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <section className={style.addtrending}>
        <h2>Add New Movie</h2>
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="title">Movie Name</label>
          <input
            type="text"
            id="title"
            name="title"
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
          <label htmlFor="rank">Movie Rank</label>
          <input
            type="number"
            id="rank"
            name="rank"
            onChange={changeHandler}
            required
            min="0"
            max="10"
            step="0.1"
            placeholder="please wrtie rank"
          />
          <label htmlFor="change">Movie Change</label>
          <input
            type="number"
            id="change"
            name="change"
            onChange={changeHandler}
            required
            step="0.1"
            placeholder="please wrtie change"
          />
          <button type="submit">Add Movie</button>
        </form>
      </section>
    </>
  );
};

export default AddTrending;
