import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const DeleteTrending = ({ id }) => {
  const navigate = useNavigate();
  const clickHandler = async () => {
    Swal.fire({
      title: "آیا مطمئن هستید ؟",
      text: "این عملیات قابل برگشت نیست",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "لغو",
      background: "#2b2b2b",
      confirmButtonColor: "#207bd0",
      cancelButtonColor: "rgb(217, 27, 27)",
      confirmButtonText: "حذف",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const DeleteTrending = async () => {
            await fetch(`https://imdb-api-9fl7.onrender.com/Trending/${id}`, {
              method: "DELETE",
            });
          };
          await DeleteTrending();
          setTimeout(() => {
            navigate(0);
          }, 1000);
        } catch (error) {
          console.log(error.message);
        }
        Swal.fire({
          title: "پاک شد",
          text: "با موفقیت حذف شد",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <button onClick={() => clickHandler()}>Delete</button>
    </>
  );
};

export default DeleteTrending;
