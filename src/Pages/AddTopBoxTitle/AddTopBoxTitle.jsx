import { useState } from "react";
import style from "./AddTopBoxTitle.module.css";
import { useNavigate } from "react-router-dom";
const AddTopBoxTitleTable = () => {
  let navigate = useNavigate();
  const [topBoxTitleTable, setTopBoxTitleTable] = useState({
    src: "",
    alt: "",
    name: "",
    rate: "",
    weekSales: "",
    totalSales: "",
    releaseWeek: "",
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setTopBoxTitleTable({
      ...topBoxTitleTable,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const posttopBoxTitleTable = async () => {
        await fetch("http://localhost:3000/TopBoxTitle", {
          method: "POST",
          body: JSON.stringify({
            name: topBoxTitleTable.name,
            src: topBoxTitleTable.src,
            alt: topBoxTitleTable.alt,
            rate: topBoxTitleTable.rate,
            weekSales: topBoxTitleTable.weekSales,
            totalSales: topBoxTitleTable.totalSales,
            releaseWeek: topBoxTitleTable.releaseWeek,
          }),
        });
      };
      await posttopBoxTitleTable();
      navigate("./../");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <section className={style.addtopBoxTitleTable}>
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
          <label htmlFor="weekSales">Weekly Sales</label>
          <input
            type="number"
            id="weekSales"
            name="weekSales"
            onChange={changeHandler}
            required
            placeholder="please wrtie weekSales"
          />

          <label htmlFor="totalSales">Total Sales</label>
          <input
            type="number"
            id="totalSales"
            name="totalSales"
            onChange={changeHandler}
            required
            placeholder="please wrtie totalSales"
          />

          <label htmlFor="releaseWeek">Release Week</label>
          <input
            type="number"
            id="releaseWeek"
            name="releaseWeek"
            onChange={changeHandler}
            required
            placeholder="please wrtie releaseWeek"
          />
          <button type="submit">Add Movie</button>
        </form>
      </section>
    </>
  );
};

export default AddTopBoxTitleTable;
