import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import channelReducer from "./slices/channelSlices";
import videoReducer from "./slices/videoSlice";
import videoPlayerReducer from "./slices/videoPlayerSlice";
import recommendedVideoReducer from "./slices/recommnededVideosSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    channel: channelReducer,
    video: videoReducer,
    videoPlayer: videoPlayerReducer,
    recommendedVideo: recommendedVideoReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
