import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useVideo } from "../hooks/useVideo";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";

const categories = [
  "Gaming",
  "Study",
  "Anime",
  "Funny",
  "Tech",
  "Sports",
  "Travel",
];

const VideoUpload = (): JSX.Element => {
  const { uploadVideo, uploadProgress, error } = useVideo();
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    thumbnailUrl: Yup.string()
      .url("Invalid URL format")
      .required("Thumbnail URL is required"),
    category: Yup.string().required("Category is required"),
  });

  const handleSubmit = async (values: any) => {
    if (!videoFile) {
      alert("Please upload a video file");
      return;
    }

    try {
      const responseData = await uploadVideo({ ...values, videoFile });
      alert("Video uploaded successfully!");
      navigate(`/channel/${responseData.channelId}`);
      setVideoFile(null);
    } catch {
      alert(error || "Failed to upload video");
      setVideoFile(null);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  };

  return (
    <div className="p-3">
      <h2 className="text-xl sm:text-3xl  font-bold text-center">
        Upload New Video
      </h2>
      <Formik
        initialValues={{
          title: "",
          description: "",
          thumbnailUrl: "",
          category: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">      
        <Form className="flex flex-col gap-4 my-4">
          <img
            src="https://dummyimage.com/600x400/d4d4d4/fff.jpg&text=No+Thumbnail"
            alt="thumbnail preview"
            className="w-[300px] h-[25vh] rounded-lg object-cover"
          />
          {uploadProgress > 0 && (
            <ProgressBar completed={uploadProgress} maxCompleted={100} />
          )}
          <div className="flex flex-col">
            <label htmlFor="thumbnailUrl" className="font-semibold">
              Thumbnail URL
            </label>
            <Field
              type="text"
              name="thumbnailUrl"
              className="rounded-lg border outline-none px-3 py-1 mt-1 w-full "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="video" className="font-semibold">
              Video File
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleVideoChange}
              className="rounded-lg border outline-none px-3 py-1 mt-1 w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold">
              Title
            </label>
            <Field
              type="text"
              name="title"
              className="rounded-lg border outline-none px-3 py-1 mt-1 w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <Field
              as="textarea"
              name="description"
              className="rounded-lg border outline-none px-3 py-1 mt-1 w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <Field
              as="select"
              name="category"
              className="rounded-lg border outline-none px-3 py-1 mt-1 w-full"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Field>
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className=" w-full py-2 px-4 bg-black text-white font-semibold mt-2 rounded-lg"
            >
              Upload Video
            </button>
          </div>
        </Form>
        </div>
      </Formik>
    </div>
  );
};

export default VideoUpload;
