import React from 'react';

const Input = ({ setPrompt }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Type a prompt ..."
        className="bg-black text-white bg-white/5 border-2 border-white/20 rounded-xl p-3 w-full h-14 sm:h-16 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
};

export default Input;
