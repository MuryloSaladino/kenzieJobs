import axios from "axios";

export const kenzieJobs = axios.create({
    baseURL: "https://kenzie-job-api.onrender.com",
    timeout: 8000
})