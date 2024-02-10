import { useSelector } from "react-redux";

export function CryptonetApi() {
  const { data, loading } = useSelector((state) => state.cryptonet);
  if (loading === "Success") {
    return data;
  }
  const { results, info } = data;

  console.log(info);
  return (
    <div className="bg-stone-300 h-full">
      <div className="flex justify-center ">
        {loading === "success"
          ? results.map((ele) => {
              return (
                <div className="bg-white py-5 px-10 grid gap-y-3 grid-cols-1 divide-y">
                  <div className="flex">
                    <img src={ele.picture.large}></img>
                    <img src={ele.picture.medium}></img>
                    <img src={ele.picture.thumbnail}></img>
                  </div>
                  <div>
                    <div className="flex space-x-1 ">
                      <p>Name : </p>
                      <p>{ele.name.title}</p>
                      <p>{ele.name.first}</p>
                      <p>{ele.name.last}</p>
                    </div>
                    <p>Age : {ele.dob.age}</p>
                    <p>Date of Birth : {ele.dob.date}</p>
                  </div>
                  <div className="grid grid-col-1 gap-1 ">
                    <p className="font-semibold my-2">Login Information :</p>
                    <div> Md5: {ele.login.md5}</div>
                    <div>Password : {ele.login.password}</div>
                    <div>Salt : {ele.login.salt}</div>
                    <div>Shal : {ele.login.sha1}</div>
                    <div> Sha256 : {ele.login.sha256}</div>
                    <div> Username : {ele.login.username}</div>
                    <div>Uuid : {ele.login.uuid}</div>
                  </div>
                  <div className="grid grid-col-1 gap-1 ">
                    <p className="font-semibold my-2">Register Information</p>
                    <div>Age : {ele.registered.age}</div>
                    <div>Date : {ele.registered.date}</div>
                  </div>
                  <div className="   ">
                    <p className="my-3 font-semibold">Address :</p>
                    <div className="grid grid-cols-2 gap-y-2">
                      <p> Name: {ele.location.street.name}</p>
                      <p>Number : {ele.location.street.number}</p>
                      <p> Postcode: {ele.location.postcode}</p>
                      <p>City : {ele.location.city}</p>
                      <p> State: {ele.location.state}</p>
                      <p>Country : {ele.location.country}</p>
                      <p> State: {ele.location.state}</p>
                      <p>Country : {ele.location.country}</p>
                      <p> Latitude: {ele.location.timezone.description}</p>
                      <p> Longitude: {ele.location.timezone.offset}</p>
                    </div>
                  </div>
                  <br />
                </div>
              );
            })
          : null}
      </div>
      {/* <div className="flex justify-center ">
        <div px-10 grid gap-y-4 grid-cols-1 divide-y>
          <div>{info.seed}</div>
          <div>{info.page}</div>
          <div>{info.results}</div>
          <div>{info.version}</div>
        </div>
      </div> */}
    </div>
  );
}
