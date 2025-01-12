import { useState } from 'react';
import { Button } from '../Button';
import Heading from '../Heading';
import Input from '../Input';
import Display from '../Display';

const Image = () => {
  const [imageURL, setImageURL] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const query = async (data) => {
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev',
        {
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) throw new Error('Failed to generate image');
      const result = await response.blob();
      return result;
    } catch (error) {
      console.error('Error generating image:', error);
      setLoading(false);
      alert('An error occurred while generating the image. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    setLoading(true);
    const result = await query({ inputs: prompt });
    if (result) {
      const imageurl = URL.createObjectURL(result);
      setImageURL(imageurl);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-16 sm:mt-20 md:mt-28 space-y-6 mb-16 sm:mb-24 px-4">
      <Heading />
      <div className="flex flex-col justify-center space-y-8 sm:space-y-10 w-full sm:w-8/12 md:w-6/12">
        <h5 className="text-white font-semibold text-center sm:text-left text-lg sm:text-xl lg:text-2xl">
          Type your prompt below to generate any image you can imagine!
        </h5>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
          <Input setPrompt={setPrompt} />
          <div className="flex justify-center sm:justify-end ml-auto mr-auto ">
            <Button handleSubmit={handleSubmit} />
          </div>
        </div>

        <Display imageURL={imageURL} loading={loading} />

        {imageURL && (
          <a
          style={{
            background: 'linear-gradient(81.02deg,#fa5560 -23.49%, #b14bf4 45.66%, #4d91ff 194.8%)',
            backgroundClip: 'text',
            color: 'transparent'
          }}
          href={imageURL}
          download={`${prompt}-image.png`}
          className='border-b-2 px-4 py-2 rounded-lg text-center font-semibold text-lg w-40 h-10 mx-auto'>
            Download
          </a>
        )}
      </div>
    </div>
  );
};

export default Image;
