import React, { useContext } from "react";
import { data2 } from "./AllQuraa";
import { useNavigate } from "react-router-dom";
import { SurahContext } from "../context/SurahContext";

const BigReaders = () => {
  const { setReader } = useContext(SurahContext);
  const navigate = useNavigate();

  function handleSurah(info) {
    setReader(info);
    navigate("/main");
  }
  return (
    <section>
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-right"> كبار القراء</h1>
        <div className="flex items-center justify-between flex-wrap">
          {data2.map((info, index) => {
            return (
              <div
                onClick={() => handleSurah(info)}
                key={index}
                className="text-xl px-4 py-8 border-[1px] border-gray-300 rounded-md cursor-pointer mb-5"
              >
                {info.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BigReaders;
