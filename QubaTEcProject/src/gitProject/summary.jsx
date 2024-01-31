import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function SummaryMovie() {
  const user = useSelector((state) => state.team.users);
  const param = useParams();
  const { id } = param;
  console.log(id);
  const res = user.filter((ele) => ele.show.id == id);
  console.log(res);

  return (
    <>
      <div className="flex justify-center items-center my-1">
        <div>
          <div className="text-center text-2xl font-medium py-4">
            Movie Details
          </div>
          <img
            src={
              res[0].show.image ? res[0].show.image.medium : "placeholder-url"
            }
            alt={res[0].show.name}
            className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
          />
          <div className="flex justify-between py-5">
            <p>{res[0].show.name}</p>
            <p> {res[0].show.language}</p>
          </div>
          <div className="w-[310px]">{res[0].show.summary}</div>
        </div>
      </div>
    </>
  );
}
