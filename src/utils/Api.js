import {
  BASE_URL,
  PORT,
  PROXY,
} from "./config.js";

class Api {

  constructor(config) {
    this.url = config.url;
  }

  getList() {
    return fetch(PROXY + this.url + PORT, {
      method: "GET",
      headers: {
        "Content-Type": "text/html"
      },
    }).then(this._checkPromise);
  }

  _checkPromise(res) {
    return res.ok ? res.json() : Promise.reject(`Файл не найден!`);
  }
}

const api = new Api({
  url: `${BASE_URL}`
});

export default api;
