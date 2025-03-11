import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-500/30 flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
