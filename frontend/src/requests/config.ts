import axios from "axios";

const apiUrl = process.env.REACT_APP_API_SERVER_URL;
export const instance = axios.create({
    baseURL: apiUrl,
});
