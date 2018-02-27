import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-cb424.firebaseio.com/"
});

export default instance;