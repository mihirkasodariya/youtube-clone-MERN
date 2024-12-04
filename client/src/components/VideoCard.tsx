import { useNavigate } from "react-router-dom";
import VideoEditModal from "../components/VideoEditModal";
import VideoDeleteModal from "../components/VideoDeleteModal";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

interface VideoCardProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  category: string;
  channelName?: string;
  channelId?: string;
  isOwner?: boolean;
}

//for count into k,M 
const formatCount = (count: number) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return count.toString();
  }
};

//truncate title to manage ui
const truncateTitle = (title: string, maxLength: number) => {
  return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};

// passed props
const VideoCard = ({
  videoId,
  title,
  thumbnailUrl,
  views,
  category,
  channelName,
  channelId,
  isOwner,
}: VideoCardProps): JSX.Element => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleVideoClick = () => navigate(`/video/${videoId}`);
  const handleChannelClick = () => {
    if (channelId) {
      navigate(`/channel/${channelId}`);
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-all duration-300 ease-linear cursor-pointer h-80" // Set fixed height here
      onClick={handleVideoClick}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="rounded-lg h-40 w-full object-cover"
      />
      <h3 className="mt-2 font-semibold text-lg uppercase">
        {truncateTitle(title, 25)} {/* Truncate title here */}
      </h3>
      <p className="text-gray-600">{formatCount(views)} views</p>
      <p className="text-gray-500 text-sm">Category: {category}</p>
      {channelName && (
        <p
          className="hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            handleChannelClick();
          }}
        >
          Uploaded by: @{channelName}
        </p>
      )}
      {isOwner && (
         <div className="flex mt-3 gap-4">
         <button
           onClick={handleEdit}
           className="bg-blue-500 px-2 py-1 text-white rounded-md hover:opacity-70 transition-all duration-300 ease-linear flex items-center gap-1"
         >
           <MdEdit /> Edit
         </button>
         <button
           onClick={handleDelete}
           className="bg-red-500 px-2 py-1 text-white rounded-md hover:opacity-70 transition-all duration-300 ease-linear flex items-center gap-1"
         >
           <MdDelete /> Delete
         </button>
       </div>
      )}
      {isEditModalOpen && (
        <VideoEditModal
          videoId={videoId}
          currentTitle={title}
          currentDescription=""
          currentThumbnailUrl={thumbnailUrl}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {isDeleteModalOpen && (
        <VideoDeleteModal
          videoId={videoId}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default VideoCard;
