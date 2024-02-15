import { Route, Routes } from "react-router-dom";
import CryptonrtProject from "./index";
export default function CryptonetRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CryptonrtProject />}></Route>
        <Route path={`/view/:id`}></Route>
      </Routes>
    </>
  );
}
