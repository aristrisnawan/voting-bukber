import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Url } from "./Url";

export default function VotingComponent() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    axios.post(`${Url}/voting`, data).then((res) => {
      alert("succes");
      window.location.reload();
    });
  };

  let [data] = useState({
    tempat: [
      {
        id: 1,
        value: "Astro",
      },
      {
        id: 2,
        value: "Kedai JA",
      },
      {
        id: 3,
        value: "Masak",
      },
      {
        id: 4,
        value: "Solaria",
      },
      {
        id: 5,
        value: "Alam sunda",
      },
      {
        id: 6,
        value: "Sugema",
      },
      {
        id: 7,
        value: "Selagedang",
      },
      {
        id: 8,
        value: "Kafetaria sunda",
      },
      {
        id: 9,
        value: "Lumbung padi",
      },
      {
        id: 10,
        value: "Racik desa",
      },
      {
        id: 11,
        value: "kejora",
      },
      {
        id: 12,
        value: "muara sunda",
      },
      {
        id: 13,
        value: "sanding resto",
      },
      {
        id: 14,
        value: "Cibiuk Lewigoong",
      },
    ],
  });

  return (
    <div className="px-2 mt-2 tablet:hidden laptop:hidden desktop:hidden">
      <h1 className="text-2xl font-bold text-center">Voting Tempat Makan</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nama</label>
        <input
          {...register("firstName")}
          className=" w-full border-2 border-gray-300 rounded h-10 pl-2 placeholder:text-slate-300 placeholder:pl-3 focus:outline-none focus:border-gray-300"
          placeholder="Isi ku nami nyalira!"
          required
        />
        <label>Pilih Tempat</label>
        <select
          {...register("place")}
          className=" w-full border-2 border-gray-300 rounded h-10 pl-2 placeholder:text-slate-300 placeholder:pl-3 focus:outline-none focus:border-gray-300"
          required
          defaultValue={"DEFAULT"}
        >
          <option value="DEFAULT" disabled>
            Pilih Tempat
          </option>
          {data.tempat.map((dt) => (
            <option key={dt.id} value={dt.value}>
              {dt.value}
            </option>
          ))}
        </select>
        <div>
          <button
            className="px-3 py-2 bg-blue-500 rounded text-white mt-2"
            type="submit"
          >
            Kirim
          </button>
          <button
            className="px-3 py-2 bg-blue-500 rounded text-white mt-2 ml-2"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
