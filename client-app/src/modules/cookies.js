import Cookies from "js-cookie";

function get({ name }) {
  return new Promise((resolve) => {
    console.log(`Cookie "${name}" got in "getCookieByName"`);
    resolve(Cookies.get(name));
  });
}

function set({ name }) {
  return new Promise((resolve) => {
    Cookies.set(name, "");
    console.log(`Cookie "${name}" set in "purgeCookieByName"`);
    resolve();
  });
}

export const getCookie = get;
export const setCookie = set;
