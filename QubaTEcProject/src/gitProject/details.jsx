import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const MovieDetails = () => {
  const users = useSelector((state) => state.team.users);

  return (
    <div className="h-4 ">
      <div className=" m-10 grid grid-cols-4 gap-6 font-text">
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
              ;
              <div className=" py-2 cursor-pointer font-medium text-white ">
                <p className=" text-textColor  p-1">{photo.show.name}</p>
                <button className="text-center items-center w-full bg-indigo-400 px-4 rounded-sm p-1">
                  view
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
