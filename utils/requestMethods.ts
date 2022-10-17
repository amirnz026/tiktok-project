import axios from "axios";
// import * as dotenv from "dotenv";
// dotenv.config();

const BASE_URL = `https://napi.arvancloud.com/vod/2.0/channels/${process.env.CHANNEL_ID}/videos`;

export const arvanVideosRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: process.env.ACKEY || "",
  },
});
