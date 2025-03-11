import { useContext } from "react";
import { SurahContext } from "../context/SurahContext";

const Surahs = () => {
  const handleSurahClick = (surah) => {
    if (surah?.url) {
      setSelected(surah.id);
      setSurah(surah);
    }
  };
  const { surahs, setSurah, selected, setSelected } = useContext(SurahContext);
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row">
          {surahs?.length > 0 &&
            surahs.map((surah) => {
              return (
                <div key={surah?.id} onClick={() => handleSurahClick(surah)}>
                  <div
                    className={`mb-5 px-4 py-6 cursor-pointer rounded-lg flex items-center justify-between border-[1px] border-gray-300 transition-all duration-300 ${
                      surah?.id === selected
                        ? "text-white bg-black"
                        : "text-black bg-white hover:text-white hover:bg-black/90"
                    }`}
                  >
                    <span className="text-xl w-12 h-12 rounded-full border-[1px] border-gray-300 flex items-center justify-center">
                      {surah?.order}
                    </span>
                    <span className="text-xl">{surah?.title}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Surahs;
