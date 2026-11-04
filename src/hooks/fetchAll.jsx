import { useEffect, useState } from "react";

const FetchAll = (url) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
};

export default FetchAll;
