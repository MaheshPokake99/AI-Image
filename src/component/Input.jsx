import React from 'react';

const Input = ({setPrompt}) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Type a prompt ..."
        className="bg-black text-white bg-white/5 border-2 border-white/20 rounded-xl p-3 w-96 h-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e)=>setPrompt(e.target.value)}
      />
    </div>
  );
};

export default Input;
