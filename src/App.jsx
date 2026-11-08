import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Sign from "./Pages/Sign/Sign";
import TopBox from "./Pages/TopboxOffice/TopboxOffice";
import Streaming from "./Pages/Streaming/Streaming";
import Originals from "./Pages/Originals/Originals";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import FavoriteTable from "./Pages/FavoriteTable/FavoriteTable";
import TopBoxTitleTable from "./Pages/TopBoxTitleTable/TopBoxTitleTable";
import TrendingTable from "./Pages/TrendingTable/TrendingTable";
import AddFavorite from "./Pages/AddFavorite/AddFavorite";
import AddTopBoxTitleTable from "./Pages/AddTopBoxTitle/AddTopBoxTitle";
import AddTrending from "./Pages/AddTrending/AddTrending";
import EditTopBoxTitle from "./Pages/EditTopBoxTitle/EditTopBoxTitle";
import EditFavorite from "./Pages/EditFavorite/EditFavorite";
import EditTrending from "./Pages/EditTrending/EditTrending";
import ShowTopBoxTitle from "./Pages/ShowTopBoxTitle/ShowTopBoxTitle";
import ShowFavorite from "./Pages/ShowFavorite/ShowFavorite";
import ShowTrending from "./Pages/ShowTrending/ShowTrending";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/IMDb">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="favorite" element={<FavoriteTable />} />
            <Route path="topboxtitle" element={<TopBoxTitleTable />} />
            <Route path="trending" element={<TrendingTable />} />
            <Route path="addfavorite" element={<AddFavorite />} />
            <Route
              path="addtopBoxTitleTable"
              element={<AddTopBoxTitleTable />}
            />
            <Route path="addtrending" element={<AddTrending />} />
            <Route path="edittopboxtitle/:id" element={<EditTopBoxTitle />} />
            <Route path="editfavorite/:id" element={<EditFavorite />} />
            <Route path="edittrending/:id" element={<EditTrending />} />
            <Route path="showfavorite/:id" element={<ShowFavorite />} />
            <Route path="showtopboxtitle/:id" element={<ShowTopBoxTitle />} />
            <Route path="showtrending/:id" element={<ShowTrending />} />
          </Route>

          <Route path="/Sign" element={<Sign />}></Route>
          <Route path="/TopboxOffice" element={<TopBox />}></Route>
          <Route path="/Streaming" element={<Streaming />}></Route>
          <Route path="/Originals" element={<Originals />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
