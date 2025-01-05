import React from 'react'

const Display = ({imageURL,loading}) => {
  return (
    <div className='h-[550px] w-[600px] ml-auto mr-auto'>
            <div className="text-white/50 text-2xl bg-white/5 border-2 border-white/20 rounded-lg p-3 flex flex-col justify-center items-center select-none h-full">
      {loading ? (
        <div className='loader'></div>
        ) : imageURL ? (
          <img src={imageURL} alt="Generated Image" className='rounded-lg h-full w-fullobject-contain'/>
        ) : (
          <>
            <p>Enter your prompt and hit generate!</p>
            <p>+</p>
          </>
        )
      }
    </div> 
    </div> 
  )
}

export default Display