import { createSlice } from "@reduxjs/toolkit";

interface Comment {
  commentText: string;
  username: string;
  userId: string;
}

interface ChannelData {
  _id: string;
  channelName: string;
  subscribers: number;
  owner: {
    avatar: string;
  };
}

interface Video {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  channelId: string | ChannelData;
  uploader: string;
  views: number;
  likes: number;
  dislikes: number;
  category: string;
  comments: Comment[];
  uploadDate: Date;
}

interface VideoPlayerState {
  video: Video | null;
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
}

const initialState: VideoPlayerState = {
  video: null,
  comments: [],
  isLoading: false,
  error: null,
};

const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState,
  reducers: {
    setVideoLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setVideoError: (state, action) => {
      state.error = action.payload;
    },
    setVideo: (state, action) => {
      state.video = action.payload.video;
      state.comments = action.payload.comments;
    },
  },
});

export const { setVideoLoading, setVideoError, setVideo } =
  videoPlayerSlice.actions;
export default videoPlayerSlice.reducer;
