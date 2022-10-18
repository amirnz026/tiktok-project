import * as tus from "tus-js-client";

const URL =
  "https://napi.arvancloud.com/vod/2.0/channels/e3292d1b-7aed-46e3-87be-cb1faf0721e9/files";

export const upload = (file: any) => {
  new tus.Upload(file, {
    // Endpoint is the upload creation URL from your tus server
    endpoint: "https://tusd.tusdemo.net/files/",
    // Retry delays will enable tus-js-client to automatically retry on errors
    retryDelays: [0, 3000, 5000, 10000, 20000],
    // Attach additional meta data about the file for the server
    metadata: {
      filename: file.name,
      filetype: file.type,
    },
    // Callback for errors which cannot be fixed using retries
    onError: function (error) {
      console.log("Failed because: " + error);
    },
    // Callback for reporting upload progress
    onProgress: function (bytesUploaded, bytesTotal) {
      var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
      console.log(bytesUploaded, bytesTotal, percentage + "%");
    },
    // Callback for once the upload is completed
    onSuccess: function () {
      console.log("Download %s from %s", upload.file.name, upload.url);
    },
  });
};
