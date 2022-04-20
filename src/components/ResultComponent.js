import axios from "axios";
import React, { useEffect, useState } from "react";
import { Url } from "./Url";

export default function ResultComponent() {
  let [sum, setSum] = useState([]);
  let [astro, setAstro] = useState([]);
  let [kja, setKja] = useState([]);
  let [masak, setMasak] = useState([]);
  let [solaria, setSolaria] = useState([]);
  let [als, setAls] = useState([]);
  let [sugema, setSugema] = useState([]);
  let [slg, setSlg] = useState([]);
  let [ks, setKs] = useState([]);
  let [lp, setLp] = useState([]);
  let [rd, setRd] = useState([]);
  let [kejora, setKejora] = useState([]);
  let [ms, setMs] = useState([]);
  let [sr, setSr] = useState([]);
  let [cl, setCl] = useState([]);

  useEffect(() => {
    axios.get(`${Url}/voting/count`).then((res) => {
      const total = res.data;
      setSum(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Astro`).then((res) => {
      const total = res.data;
      setAstro(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Kedai%20JA`).then((res) => {
      const total = res.data;
      setKja(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Masak`).then((res) => {
      const total = res.data;
      setMasak(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Solaria`).then((res) => {
      const total = res.data;
      setSolaria(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Alam%sunda`).then((res) => {
      const total = res.data;
      setAls(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Sugema`).then((res) => {
      const total = res.data;
      setSugema(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Selagedang`).then((res) => {
      const total = res.data;
      setSlg(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Kafetaria%sunda`).then((res) => {
      const total = res.data;
      setKs(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Lumbung%padi`).then((res) => {
      const total = res.data;
      setLp(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Racik%desa`).then((res) => {
      const total = res.data;
      setRd(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=kejora`).then((res) => {
      const total = res.data;
      setKejora(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=muara%sunda`).then((res) => {
      const total = res.data;
      setMs(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=sanding%resto`).then((res) => {
      const total = res.data;
      setSr(total);
    });
  }, []);
  useEffect(() => {
    axios.get(`${Url}/voting/count?place=Cibiuk%Lewigoong`).then((res) => {
      const total = res.data;
      setCl(total);
    });
  }, []);

  return (
    <div className="px-2 tablet:hidden laptop:hidden desktop:hidden">
      <h1 className="text-center mt-3">Hasil Voting</h1>
      <ul>
        <li>Astro : {astro.count}</li>
        <li>Kedai JA : {kja.count}</li>
        <li>Masak : {masak.count}</li>
        <li>Solaria : {solaria.count}</li>
        <li>Alam Sunda : {als.count}</li>
        <li>Sugema : {sugema.count}</li>
        <li>Salagedang : {slg.count}</li>
        <li>Kafetaria Sunda : {ks.count}</li>
        <li>Lumbung Pada : {lp.count}</li>
        <li>Racik Desa : {rd.count}</li>
        <li>Kejora : {kejora.count}</li>
        <li>Muara Sunda : {ms.count}</li>
        <li>Sanding Resto : {sr.count}</li>
        <li>Cibiuk Leuwigoong : {cl.count}</li>
      </ul>
      <p className="text-center mt-3 font-semibold">
        {" "}
        Total Voting : {sum.count}
      </p>

      <div className="text-center py-3">
        <a href="http://aristrisnawan.vercel.app/" target="_blank">
          ©aristrisnawan
        </a>
      </div>
    </div>
  );
}
