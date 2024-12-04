import { createSlice } from "@reduxjs/toolkit";

interface Video {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  channelName: string;
  uploadDate: string;
}

interface RecommendedVideosState {
  videos: Video[];
}

const initialState: RecommendedVideosState = {
  videos: [],
};

const recommendedVideosSlice = createSlice({
  name: "recommendedVideos",
  initialState,
  reducers: {
    setRecommendedVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { setRecommendedVideos } = recommendedVideosSlice.actions;
export default recommendedVideosSlice.reducer;
