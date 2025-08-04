import axios from "axios";

const productURL = "https://dummyjson.com/products";

const getProducts = async () => {
  try {
    const res = await axios.get(productURL);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
