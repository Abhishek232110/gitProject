import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieDetails from "../gitProject/details";
import { SummaryMovie } from "../gitProject/summary";
import CryptonrtProject from "../cryptonetProject";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CryptonrtProject />}></Route>
        <Route path={`/view/:id`} element={<SummaryMovie />}></Route>
      </Routes>
    </>
  );
}

// export { AppRoutes };
