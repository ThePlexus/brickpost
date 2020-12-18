import fetch from "node-fetch";

const API_URL = "https://api.hardbrick.org/v1/randomPW";

export function status() {
  fetch(API_URL)
    .catch((r) => r)
    .then((r) => {
      if (r.status === 200) {
        return r.json();
      }
      return {
        status: "error",
        message: "server error: " + r,
      };
    })
    .then((r) => {
      if (r.status === "ok") {
        console.log("everything working as expected.");
        console.log("randomPW: ", r.password);
      } else console.log("services not working as expected! reason:", r.message);
    });
}
