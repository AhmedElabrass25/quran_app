import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SurahContext = createContext();
const SurahContextProvider = ({ children }) => {
  const [surahs, setSurahs] = useState([]);
  const [surah, setSurah] = useState();
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [readear, setReader] = useState();

  async function getAllSurahs() {
    if (!readear?.api) return;
    try {
      setLoading(true);
      let { data } = await axios(readear?.api);
      localStorage.setItem("readerName", readear?.name);
      console.log(data?.attachments);
      setSurahs(data?.attachments);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAllSurahs();
  }, [readear]);
  return (
    <SurahContext.Provider
      value={{
        surahs,
        setSurah,
        surah,
        setSelected,
        selected,
        getAllSurahs,
        loading,
        setLoading,
        setReader,
        readear,
        setSurahs,
      }}
    >
      {children}
    </SurahContext.Provider>
  );
};
export default SurahContextProvider;
