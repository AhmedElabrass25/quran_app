import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCirclePause, FaPlay } from "react-icons/fa6";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { SurahContext } from "../context/SurahContext";
import Loading from "./Loading";

const Player = () => {
  const { surah, setSurah, surahs, setSelected, readear } =
    useContext(SurahContext);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  // playAudio
  const playAudio = () => {
    if (audioRef.current) {
      if (play) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlay(!play);
    }
  };
  // Next Surah
  const nextAudio = () => {
    const nextSurah = surahs.find((s) => s.order === surah.order + 1);
    if (nextSurah) {
      setSelected(nextSurah?.id);
      setSurah(nextSurah);
      setPlay(true);
    }
  };

  // Previous Surah
  const prevAudio = () => {
    const prevSurah = surahs.find((s) => s.order === surah.order - 1);
    if (prevSurah) {
      setSelected(prevSurah?.id);
      setSurah(prevSurah);
      setPlay(true);
    }
  };
  useEffect(() => {
    if (surah && audioRef.current) {
      setLoading(true);
      audioRef.current.load();
      if (play) {
        audioRef.current.play();
      }
      setLoading(false);
    }
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", nextAudio);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", nextAudio);
      }
    };
  }, [surah, readear]);

  return (
    <section className="mt-10 w-full top-[90px] left-0 right-0 sticky">
      <div className="container">
        <div className="row bg-black/95 py-7 rounded-lg px-5">
          <h1 className="text-white w-full text-center mb-1 text-2xl">
            {localStorage?.getItem("readerName")}{" "}
          </h1>
          <h1 className="ayah text-white w-full text-center mb-5 text-2xl">
            {surah?.title}
          </h1>
          <div className="ayah"></div>

          {/* {surah && ( */}
          {loading && <Loading />}
          <audio ref={audioRef} className="w-full mb-5" controls>
            <source src={surah?.url} type="audio/mp3" />
          </audio>
          {/* )} */}
          <div className="buttons flex items-center justify-around">
            <span
              className="bg-white/95 p-3 rounded-full cursor-pointer"
              onClick={prevAudio}
            >
              <MdSkipPrevious className="text-black text-2xl" />
            </span>
            <span
              className="bg-white/95 p-3 rounded-full cursor-pointer"
              onClick={playAudio}
            >
              {play ? (
                <FaCirclePause className="text-black text-2xl" />
              ) : (
                <FaPlay className="text-black text-xl" />
              )}
            </span>
            <span
              className="bg-white/95 p-3 rounded-full cursor-pointer"
              onClick={nextAudio}
            >
              <MdSkipNext className="text-black text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
