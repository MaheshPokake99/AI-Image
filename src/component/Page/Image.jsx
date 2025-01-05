import { Button } from '../Button'
import Heading from '../Heading'
import Input from '../Input'
import Display from '../Display'
import { useState } from 'react'

const Image = () => {
  const [imageURL,setImageURL]=useState("");
  const [prompt,setPrompt]=useState("");
  const [loading, setLoading]=useState(false);
  
  const query=async(data)=>{
    const response=await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
      {
        headers:{
          Authorization:"Bearer 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",
          "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(data)
      }
    );
    const result=await response.blob();
    return result;
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!prompt) return;
    setLoading(true);
    const result=await query({"inputs": prompt});
    const imageurl=URL.createObjectURL(result);
    console.log(imageurl);
    setImageURL(imageurl);
    setLoading(false);
  };
  return (
    <div className='flex flex-col items-center mt-28 space-y-6 mb-24'>
      <Heading></Heading>
      <div className='flex flex-col backdrop:justify-center space-y-10 w-6/12'>
        <div>
          <h5 className='text-white font-semibold '>Type you prompt below to generate any image you can imagine!</h5>
        </div>
        <div className='flex flex-row justify-between w-full space-x-10'>
          <Input setPrompt={setPrompt}></Input>
          <Button handleSubmit={handleSubmit}></Button>
        </div>
        <Display imageURL={imageURL} loading={loading}></Display>
      </div>
    </div>
  )
}

export default Image