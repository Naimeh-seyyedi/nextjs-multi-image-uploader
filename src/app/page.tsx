
"use client";
import FileInput from "@/component/fileInput";
import ImagePreview from "@/component/imagePreview";
import React, { useState } from "react";


const Home = () => {
  const [galleryImages, setGalleryImages] = useState<File[]>([]);

  const uploadImageChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);
    if (galleryImages.length + files.length > 5) {
      alert("حداکثر 5 عکس می‌توانید انتخاب کنید.");
      return;
    }
    setGalleryImages((prev) => [...prev, ...files]);
  };

  const removeImageHandler = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="m-3">
      <h2>تصاویر گالری</h2>
      <div className="p-4 border border-solid">
        <FileInput onChange={uploadImageChangeHandler} />
        <div className="flex flex-wrap justify-items-start gap-3">
          {galleryImages.length === 0 ? (
            <p className="text-red-500">حداقل یک تصویر باید انتخاب کنید.</p>
          ) : (
            galleryImages.map((image, index) => (
              <ImagePreview key={index} image={image} index={index} onRemove={removeImageHandler} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
