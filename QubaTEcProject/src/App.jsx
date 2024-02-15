import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./app/route";
import { getUsers } from "./invoPrivateLimited/userSlice";
import InvoRoute from "./invoPrivateLimited/route";
import CryptonetRoute from "./cryptonetProject/route";
import { cryptonetApi } from "./cryptonetProject/cryptonetSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(cryptonetApi());
  });
  return (
    <div>
      <CryptonetRoute />
    </div>
  );
}

export default App;
