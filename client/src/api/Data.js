import axios from "axios";

const baseURL =
process.env.NODE_ENV === "production"
  ? "/api/v1/data"
  : "http://localhost:3001/api/v1/data";

export default axios.create({
    baseURL,
})