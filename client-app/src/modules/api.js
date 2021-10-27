import * as qs from "qs";
import axios from "axios";
import requests from "@/modules/requests";

const baseURL = "http://localhost:3556";
const prefix = "/api/";

export const API_REQUEST = async (
  command,
  params = {},
  serializer = "JSON"
) => {
  const cmd = requests[command];
  if (!cmd) throw new Error("Invalid request command");
  return await axios[cmd.method](baseURL + prefix + cmd.url, {
    params,
    paramsSerializer: (params) => qs.stringify(params),
    headers: {
      "Content-Type":
        serializer === "JSON" ? "application/json" : "multipart/form-data",
    },
  }).then((res) => res.data);
};
