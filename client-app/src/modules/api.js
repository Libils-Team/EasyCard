import axios from "axios";
import { getCookie } from "./cookies";
import Router from "@/router";

const baseURL = "http://127.0.0.1";
const apiPrefix = "/api/";

let csrfToken = "";

export const API_REQUEST = async (
  command,
  params = {},
  serializer = "JSON"
) => {
  return new Promise((resolve) => {
    axios({
      url: baseURL + apiPrefix + (command?.url || command),
      method: !command?.method
        ? Object.keys(params).length
          ? "post"
          : "get"
        : command.method,
      data: params?.body || {},
      headers: {
        "X-CSRFToken": csrfToken,
        "Content-Type":
          serializer === "JSON" ? "application/json" : "multipart/form-data",
      },
    })
      .then(async (response) => {
        resolve(response.data);
        csrfToken = await getCookie({ url: baseURL, name: "csrftoken" });
      })
      .catch((e) => {
        if (e.response?.status === 401) {
          resolve(e);
          if (Router.currentRoute.path !== "/login") Router.push("/login");
        }
      });
  });
};
