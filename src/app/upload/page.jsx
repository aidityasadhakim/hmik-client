"use client";
import { useState } from "react";

const Page = () => {
  const preset_key = "";
  const cloud_name = "";
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const handleFile = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset_key);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImageUrl(data.secure_url);
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div>
      <div>
        <input type="file" name="image" id="imgUpload" onChange={handleImage} />
        <br />
        <br />
        <button onClick={handleFile}>Upload</button>
        <img src={imageUrl} alt="imageUrl" />
      </div>
    </div>
  );
};

export default Page;
