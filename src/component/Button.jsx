import React from 'react'

export const Button = ({handleSubmit}) => {
    return (
      <button className=" text-white bg-white/5 rounded-full h-14 w-40 mt-2 focus:outline-none ring-2 ring-purple-500 animate-pulse"
        onClick={handleSubmit}
      >
        <span className='font-semibold text-xl'>Generate</span>
      </button>
    );
}
