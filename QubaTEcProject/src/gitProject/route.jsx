import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieDetails from "./details";
import SummaryMovie from "./summary";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieDetails />}></Route>
        <Route path={`/view/:id`} element={<SummaryMovie />}></Route>
      </Routes>
    </>
  );
}

// export { AppRoutes };
