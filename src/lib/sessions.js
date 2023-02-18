import Cookies from "js-cookie";

const getCookieFromBrowser =(key)=>{
    return Cookies.get(key)
}

export const getCookie = (key)=>{
    return process.browser ? getCookieFromBrowser(key) || "" : ""
}


export const setCookie = (key, value) => {
    if (process.browser) {
      Cookies.set(key, value, {
        expires: 1,
        path: "/",
      });
    } else {
      console.error("setCookie failed");
    }
  };