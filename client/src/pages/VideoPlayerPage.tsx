import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useVideo } from "../hooks/useVideo"; // Import the custom hook
import { RootState } from "../redux/store";
import VideoPlayer from "../components/VideoPlayer";
import RecommendedVideo from "../components/RecommendedVideo";
import { setRecommendedVideos } from "../redux/slices/recommnededVideosSlice";

const VideoPlayerPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { fetchVideos, videos } = useVideo();
  const recommendedVideos = useSelector((state: RootState) => state.recommendedVideo.videos);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  useEffect(() => {
    if (videos.length > 0) {
      dispatch(setRecommendedVideos(videos)); 
    }
  }, [dispatch, videos]);

  return (
    <div>
      <div className="flex">
        <VideoPlayer />
        <div className="flex flex-col gap-4">
          {recommendedVideos.length &&
            recommendedVideos.slice(0, 7).map((video:any,index:number) => (
              <RecommendedVideo
                key={index}
                videoId={video.videoId}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                views={video.views}
                channelName={video.channelName}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
