import { useNavigate } from "react-router";

interface RecommendedVideoProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  channelName: string;
}

const formatCount = (count: number) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return count.toString();
  }
};

const RecommendedVideo = ({
  videoId,
  title,
  thumbnailUrl,
  views,
  channelName,

}: RecommendedVideoProps): JSX.Element => {

  const navigate = useNavigate()

  const handleVideoClick = () => {
    console.log("Navigating to video:", videoId);
    if (videoId) {
      navigate(`/video/${videoId}`);
    } else {
      console.error("videoId is undefined");
    }
  };
 

  return (
    <div className="py-4 hidden lg:flex gap-2 cursor-pointer">
      <div>
        <img onClick={handleVideoClick} className="w-40 rounded-lg" src={thumbnailUrl} alt={title} />
      </div>
      <div>
        <h2 className="capitalize">{title}</h2>
        <p className="text-[12px]">{channelName}</p>
        <div className="flex gap-2">
          <p className="text-[10px]">{formatCount(views)} views</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideo;
