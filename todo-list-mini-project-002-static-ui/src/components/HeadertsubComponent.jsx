import React from "react";

const HeadertsubComponent = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg font-semibold">HRD Design</h1>
        <button
          //   onClick={() => setIsFavorited(!isFavorited)}
          className="p-1 rounded-lg hover:bg-gray-100"
        >
          <div
            className={`w-5 h-5 ${isFavorited ? "fill-black" : "stroke-black"}`}
          />
        </button>
      </div>
    </>
  );
};

export default HeadertsubComponent;
