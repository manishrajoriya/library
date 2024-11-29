"use client"
import axios from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select an image to upload.');
      return;
    }
    setError('');

    const formData = new FormData();
    formData.append('image', selectedFile);

    const res = await axios.post('/api/upload', formData);

   console.log(res);
    
  //   if (res) {
  //     setUploadedImage();
  //   } else {
  //     setError(data.error);
  //   }
  // };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">Upload an Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          title='image'
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Upload
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>} 

       {uploadedImage && (
        <div className="mt-4">
          <p>Image uploaded successfully!</p>
          <img src={uploadedImage} alt="Uploaded" className="mt-2" width="200" />
        </div>
      )}
    </div>
  );
  }}