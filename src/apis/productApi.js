// apis/productApi.js
import axios from "axios";

const productURL = "https://dummyjson.com/products";

export const getProducts = async () => {
  try {
    const res = await axios.get(productURL);
    console.log(res.data);
    return res.data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
