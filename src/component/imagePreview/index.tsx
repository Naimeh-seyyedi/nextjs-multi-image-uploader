import React, { FC } from "react";
import Image from "next/image";
import { ImagePreviewProps } from "./imagePreview.interface";

const ImagePreview: FC<ImagePreviewProps> = ({ image, index, onRemove }) => {
  const imageUrl = URL.createObjectURL(image);

  return (
    <div key={index} className="flex flex-col items-center">
      <Image
        src={imageUrl}
        alt={`image ${index}`}
        className="w-32 h-32 object-cover rounded-md"
        width={150}
        height={150}
      />
      <button
        onClick={() => onRemove(index)}
        className="bg-red-400 hover:opacity-80 text-white px-2 py-1 text-center cursor-pointer mt-2 rounded-md"
      >
        حذف
      </button>
    </div>
  );
};

export default ImagePreview;
