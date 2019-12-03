import axios from "axios";

const KEY = "AIzaSyBmhmhidFdz-qdXbYtg7fbM_p4n_lGYd6A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
