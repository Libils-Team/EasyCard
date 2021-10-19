import axios from "axios";
import Router from "@/router";
import requests from "@/modules/requests";

const baseURL = "http://127.0.0.1";
const prefix = "/api/";

export const API_REQUEST = async (
  command,
  params = {},
  serializer = "JSON"
) => {
  const cmd = requests[command];
  if (!cmd) throw new Error("Invalid request command");

  return new Promise((resolve) => {
    axios({
      url: baseURL + prefix + cmd.url,
      method: cmd.method,
      data: params?.body || {},
      headers: {
        "Content-Type":
          serializer === "JSON" ? "application/json" : "multipart/form-data",
      },
    })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((e) => {
        if (e.response?.status === 401) {
          resolve(e);
          if (Router.currentRoute.path !== "/login") Router.push("/login");
        }
      });
  });
};
