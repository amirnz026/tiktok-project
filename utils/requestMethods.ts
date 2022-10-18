import axios from "axios";
// import * as dotenv from "dotenv";
// dotenv.config();
const BASE_URL = `https://napi.arvancloud.com/vod/2.0/channels/e3292d1b-7aed-46e3-87be-cb1faf0721e9/videos`;
const GET_DRAFTS_URL = `https://napi.arvancloud.com/vod/2.0/channels/e3292d1b-7aed-46e3-87be-cb1faf0721e9/files`;
const ARVAN_REMOVE_FILE_URL = `https://napi.arvancloud.com/vod/2.0/files/`;

export const arvanVideosRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Apikey bcf5e789-fa10-518f-9cd3-61db030bb348",
  },
});

export const arvanGetDrafts = axios.create({
  baseURL: GET_DRAFTS_URL,
  headers: {
    Authorization: "Apikey bcf5e789-fa10-518f-9cd3-61db030bb348",
  },
});
