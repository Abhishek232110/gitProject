import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const MovieDetails = () => {
  const users = useSelector((state) => state.team.users);

  return (
    <div className="">
      <div className=" m-1 grid grid-cols-4 gap-4 font-text bg-slate-100 ">
        {users.map((photo) => (
          <Link to={`/view/${photo.show.id}`}>
            <div key={photo.show.id} className="  rounded-lg  shadow-md">
              <img
                src={
                  photo.show.image ? photo.show.image.medium : "placeholder-url"
                }
                alt={photo.show.name}
                className="w-[310px] h-60 hover:ease-in duration-300 rounded-sm cursor-pointer "
              />

              <div className=" py-2 cursor-pointer font-medium text-white ">
                <p className=" text-textColor  p-1">{photo.show.name}</p>
                <div className=" flex justify-center">
                  <button className="text-center bg-indigo-400 px-10 rounded-sm py-2">
                    view
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
