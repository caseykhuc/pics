import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2c69659457871a20cf72e39069f72872c48414b2885fb50996f34cf5a48cc384"
  }
});
