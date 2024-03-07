import { useDispatch, useSelector } from "react-redux";
import { cryptonetApi } from "../cryptonetSlice";
import { useEffect, useState } from "react";

export function CryptonetApi() {
   const dispatch = useDispatch();
   const[datas, setDatas] = useState(0);
  const { data, loading } = useSelector((state) => state.cryptonet);
  if (loading === "Success") {
    return data;
  }
  
  const { results, info } = data;
const changeData=()=>{
  dispatch(cryptonetApi(datas))
  setDatas(datas+1);
}
  //   console.log(results);
  return (
    <div className="bg-stone-300 h-full">
      <div className="flex justify-center ">
        {loading === "success"
          ? results.map((ele) => {
              return (
                <div className="bg-white py-5 px-10 grid gap-y-3 grid-cols-1 divide-y">
                  <div className="flex shadow-md rounded-sm p-10 bg-zinc-100 justify-evenly">
                    <div>
                      <img src={ele.picture.large}></img>
                    </div>
                    <div className="pt-4 space-y-3">
                      <div className="flex space-x-1 ">
                        <p>Name : </p>
                        <p>{ele.name.title}</p>
                        <p>{ele.name.first}</p>
                        <p>{ele.name.last}</p>
                      </div>
                      <p>Gender : {ele.gender}</p>
                      <p>Phone Number : {ele.phone}</p>
                    </div>
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
                    {/* <p>Age : {ele.dob.age}</p>
                    <p>Date of Birth : {ele.dob.date}</p> */}
                  </div>
                 <div><button onClick={changeData}>Next</button></div>
                  <br />
                  <p>{datas}</p>
                </div>
              );
            })
          : null}
      </div>
  
    </div>
  );
}
