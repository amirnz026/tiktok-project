import axios from "axios";
import * as tus from "tus-js-client";
import { arvanGetDrafts, arvanVideosRequest } from "./requestMethods";

const tusUpload = (file: any) => {
  let resData: any;
  // Get the selected file from the input element
  // Create a new tus upload
  var upload = new tus.Upload(file, {
    // Endpoint is the upload creation URL from your tus server
    endpoint:
      "https://napi.arvancloud.com/vod/2.0/channels/e3292d1b-7aed-46e3-87be-cb1faf0721e9/files",
    // Retry delays will enable tus-js-client to automatically retry on errors
    retryDelays: [0, 3000, 5000, 10000, 20000],
    // Attach additional meta data about the file for the server
    metadata: {
      filename: file.name,
      filetype: file.type,
    },
    headers: {
      Authorization: "Apikey bcf5e789-fa10-518f-9cd3-61db030bb348",
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
    onSuccess: async function () {
      console.log(upload.url);
      // for getting all the drafts
      try {
        await arvanGetDrafts({
          url: "",
          method: "GET",
        }).then(async (response) => {
          resData = response.data.data;
          await resData.map(async (data: any) => {
            console.log(data.id);
            // for saving draft into the main channel
            await arvanVideosRequest({
              url: "",
              method: "POST",
              data: {
                file_id: data.id,
                title: data.filename,
                convert_mode: "auto",
              },
            });
            console.log(data.id);
          });
        });
      } catch (error) {
        console.log(error);
      }
      // for deleting the file from draft
      resData.map(async (data: any) => {
        try {
          console.log("this is the url to delete");
          const urlToDelete = `https://napi.arvancloud.com/vod/2.0/files/${data.id}`;
          console.log(urlToDelete);
          await axios.delete(urlToDelete, {
            headers: {
              Authorization: "Apikey bcf5e789-fa10-518f-9cd3-61db030bb348",
            },
          });
          console.log("deletedddddddddddddd");
        } catch (err) {
          console.log(err);
          console.log("not deleteddddddd");
        }
      });
    },
  });
  upload.start();
};

export default tusUpload;
