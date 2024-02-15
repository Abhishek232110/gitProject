import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import InvoPrivateLimited from "../invoPrivateLimited";
import UserLogin from "../invoPrivateLimited/component/login";

function PivateComponent() {
  const token = localStorage.getItem("token");
  return <div>{token ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default function InvoRoute() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route element={<PivateComponent />}>
          <Route path="/" element={<InvoPrivateLimited />}></Route>
        </Route>
      </Routes>
    </>
  );
}

// export { AppRoutes };
