import { Button } from '@material-tailwind/react';
import { Modal, Upload } from 'antd';
import React, { useState } from 'react';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImageUploader = ({ route, images }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList)
    return fileList;
  };

  return (
    <div className="text-black dark:text-white dark:bg-[#171716] animate-fadedown">
      <Upload.Dragger
        multiple
        fileList={fileList}
        onChange={handleChange}
        onPreview={handlePreview}
        listType="picture-card"
        action={`http://localhost:3000/${route}`}
        beforeUpload={(file) => {
          return false;
        }}
        data={fileList}
      >
        <div className="flex flex-col items-center text-black dark:text-white">
          Drag files here Or
          <Button
            size="lg"
            variant="gradient"
            className="flex gap-2 flex-row items-center m-2 p-2 bg-neutral-300"
          >
            Upload
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </Button>
        </div>
      </Upload.Dragger>
      {/* Image preview */}
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="imageName"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};

export default ImageUploader;
