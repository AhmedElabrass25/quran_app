import React, { useContext } from "react";
import Player from "./Player";
import Surahs from "./Surahs";
import { SurahContext } from "../context/SurahContext";
import Loading from "./Loading";

const Main = () => {
  const { loading } = useContext(SurahContext);
  return (
    <>
      {loading && <Loading />}
      <Player />
      <Surahs />
    </>
  );
};

export default Main;
