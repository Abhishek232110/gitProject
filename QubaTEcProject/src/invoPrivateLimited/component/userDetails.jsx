import { useSelector } from "react-redux";
import Header from "../headerPage/header";

export default function UserDetails() {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <Header />
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt
          quam veritatis quidem dolore commodi aliquam sed ea, rerum velit
          nostrum ullam dolorem, minima, eveniet minus nobis nulla optio?
          Consequuntur.
        </div>
      </div>
    </div>
  );
}
