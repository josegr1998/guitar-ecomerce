import { setStorage, getStorage } from "./utils.js";
let store = getStorage("store");
const fetchAllProducts = async () => {
  const response = await fetch("../api/guitars.json");
  const data = await response.json();
  setStorage("store", data);
  store = getStorage("store");
};

export { fetchAllProducts, store };
