import React, { FC } from "react";
import { FileInputProps } from "./fileInput.interface";

const FileInput: FC<FileInputProps> = ({ onChange }) => {
  return (
    <div className="mb-4">
      <input
        id="thumbnail"
        type="file"
        multiple
        onChange={onChange}
        className="border p-2"
        required
      />
    </div>
  );
};

export default FileInput;
