import { useEffect } from "react";
import MovieDetails from "./gitProject/details";
import { useDispatch } from "react-redux";
import { getApi } from "./gitProject/teamSlice";
import AppRoutes from "./gitProject/route";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  });
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
