/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog/dialog";
import { FiUpload } from "react-icons/fi";
import { Button } from "@/components/ui/Button/button";
import { Input } from "@/components/ui/Input/input";
import { IoCloudUploadOutline } from "react-icons/io5";

import RadialProgress from "@/components/custom/common/RadialProgress/RadialProgress";

export default function FileUpload() {
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const [fileUrl, setFileUrl] = useState<string>();

  // const onUploadProgress = (progressEvent: ProgressEvent) => {
  //   const percentage = Math.round(
  //     (progressEvent.loaded * 100) / progressEvent.total
  //   );
  //   setProgress(percentage);
  // };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const selected = event.target.files[0];
      setSelectedFile(selected);
      const objectURL = URL.createObjectURL(selected);
      setFileUrl(objectURL);
      console.log("✌️selectedFile --->", selected);
    }
  };

  const removeSelectedFile = () => {
    setFileUrl("");
    setSelectedFile(null);
    setLoading(false);
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const timer = setTimeout(() => {
      setLoading(false);
      clearTimeout(timer);
    }, 2000);
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      const objectURL = URL.createObjectURL(acceptedFiles[0]);
      setSelectedFile(acceptedFiles[0]);
      setFileUrl(objectURL);
      handleFileUpload(selectedFile);
    }
  }, []);

  const handleSubmit = () => {
    setSelectedFile(null);
    setFileUrl("");
  };
   
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Dialog>
      <DialogTrigger>
        <div className=" bg-black text-white flex items-center py-2 px-3 rounded-md hover:bg-opacity-80">
          <FiUpload size="1.2em" />
          <span className=" ml-2 text-sm">Upload File</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" mb-3">Upload File</DialogTitle>

          <div
            {...getRootProps()}
            className=" flex items-center justify-center w-full"
          >
            <label
              htmlFor="dropzone-file"
              className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {loading && (
                <div className=" text-center max-w-md  ">
                  <RadialProgress progress={progress} />
                  <p className=" text-sm font-semibold">Uploading Picture</p>
                  <p className=" text-xs text-gray-400">
                    Do not refresh or perform any other action while the picture
                    is being upload
                  </p>
                </div>
              )}

              {!loading && (
                <div className=" text-center">
                  <div className=" border p-2 rounded-md max-w-min mx-auto">
                    <IoCloudUploadOutline size="1.6em" />
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Drag an image</span>
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-400">
                    Click to upload &#40; file should be 500x500 px & under 10
                    MB &#41;
                  </p>
                </div>
              )}

              {!loading && fileUrl && (
                <div className="text-center">
                  <img
                    width={1000}
                    height={1000}
                    src={fileUrl}
                    className=" w-full object-contain max-h-16 mx-auto mt-2 mb-3 opacity-70"
                    alt="uploaded image"
                  />
                  <p className=" text-sm font-semibold">Picture Uploaded</p>
                  <p className=" text-xs text-gray-400">
                    Click submit to upload the picture
                  </p>
                </div>
              )}
            </label>

            <Input
              {...getInputProps()}
              id="dropzone-file"
              accept="image/png, image/jpeg"
              type="file"
              className="hidden"
              disabled={loading !== null}
              onChange={handleFileChange}
            />
          </div>
        </DialogHeader>

        <DialogFooter className=" flex items-center justify-end gap-x-2">
          <DialogClose asChild>
            <Button
              onClick={removeSelectedFile}
              type="button"
              variant="secondary"
            >
              Close
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              onClick={handleSubmit}
              disabled={!selectedFile || loading}
              size={"sm"}
              className=" text-sm"
            >
              {loading ? "Uploading..." : "Submit"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
