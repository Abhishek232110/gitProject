import { useEffect } from "react";
import MovieDetails from "./gitProject/details";
import { useDispatch } from "react-redux";
import { getApi } from "./gitProject/teamSlice";
import AppRoutes from "./app/route";
import { cryptonetApi } from "./cryptonetProject/cryptonetSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cryptonetApi());
  });
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
