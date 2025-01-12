import React from 'react';

const Display = ({ imageURL, loading }) => {
  return (
    <div className="w-full max-w-[90%] sm:max-w-[600px] h-[300px] sm:h-[450px] md:h-[550px] mx-auto">
      <div className="text-white/50 text-base sm:text-lg md:text-2xl bg-white/5 border-2 border-white/20 rounded-lg p-3 flex flex-col justify-center items-center select-none h-full">
        {loading ? (
          <div className="loader"></div>
        ) : imageURL ? (
          <img
            src={imageURL}
            alt="Generated"
            className="rounded-lg h-full w-full object-contain"
          />
        ) : (
          <>
            <p className="text-center">Enter your prompt and hit generate!</p>
            <p className="text-4xl font-bold mt-2">+</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Display;
