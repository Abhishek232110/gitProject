import { useNavigate } from "react-router-dom";
import MenuItem from "./menus";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <MenuItem />
      <button onClick={logout}>logout</button>
    </div>
  );
}
