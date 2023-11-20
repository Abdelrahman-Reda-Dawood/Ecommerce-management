import { useState } from 'react';
import { FaFileImage, FaRegTrashCan } from 'react-icons/fa6';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No selected file');

  return (
    <>
      <span className="pt-4 flex font-semibold text-2xl text-black dark:text-white">
        Upload images
      </span>
      <form
        className="flex flex-col justify-center items-start p-3 h-32 my-2 w-5/6
        border-2 rounded-md border-dashed border-neutral-400 cursor-pointer"
        action=""
        onClick={() => document.getElementById('input-field').click()}
      >
        <input
          type="file"
          accept="image/*"
          id="input-field"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {image ? (
          <img
            src={image}
            width={90}
            height={90}
            alt={fileName}
            className="flex justify-start"
          />
        ) : (
          <FaFileImage
            color="#696969"
            size={80}
          />
        )}
      </form>
      <div className="flex justify-evenly items-center w-5/6 border rounded-lg h-8 bg-primarygreen">
        <FaFileImage color="#ffffff" />
        <span>{fileName}</span>
        <FaRegTrashCan
          className="cursor-pointer"
          onClick={() => {
            setFileName('No image found ');
            setImage(null);
          }}
        />
      </div>
    </>
  );
};

export default ImageUploader;
