import axios from "axios";
import {
  setUserChannel,
  setChannel,
  setError,
} from "../redux/slices/channelSlices";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

interface ChannelData {
  channelName: string;
  description: string;
}

export const useChannel = () => {
  const dispatch = useDispatch();
  const { userChannel, channel, error } = useSelector(
    (state: RootState) => state.channel
  );

  //hook for creating channel
  const createChannel = async (channelData: ChannelData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/channels",
        channelData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(setUserChannel(response.data));
      return response.data;
    } catch (error: any) {
      dispatch(
        setError(error.response.data.message || "Failed to create channel")
      );
      throw error;
    }
  };

  //hook to fetch channel
  const fetchChannel = async (channelId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/channels/${channelId}`
      );
      dispatch(setChannel(response.data));
    } catch (error: any) {
      setError(error.response.data.message || "Failed to get channel");
    }
  };

  //hook to fetch user owned channel
  const fetchUserChannel = async () => {
    if (!userChannel) {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/channels/user/channel",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          dispatch(setUserChannel(response.data));
        }
      } catch (error: any) {
        if (error.response?.status === 404) {
          dispatch(setUserChannel(null));
        } else {
          console.error("Error fetching user's channel:", error);
          dispatch(
            setError(
              error.response?.data?.message || "Failed to fetch user's channel"
            )
          );
        }
      }
    }
  };


  //hook to edit user owned channel
  const editChannel = async (channelId: string, updatedData: ChannelData) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/channels/${channelId}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(setChannel(response.data));
      return response.data;
    } catch (error: any) {
      dispatch(
        setError(error.response?.data?.message || "Failed to update channel")
      );
    }
  };


  //hook for deleting channel
  const deleteChannel = async (channelId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/channels/${channelId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(setUserChannel(null));
    } catch (error: any) {
      dispatch(
        setError(error.response?.data?.message || "Failed to Delete channel")
      );
    }
  };

  return {
    createChannel,
    fetchChannel,
    userChannel,
    fetchUserChannel,
    channel,
    editChannel,
    deleteChannel,
    error,
  };
};
