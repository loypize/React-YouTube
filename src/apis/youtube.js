import axios from "axios";

const KEY = "AIzaSyCvcNlLvO-XBnN46Fe-76DMYTp84x4OUzA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
