import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:5000",
    // https://ecommerce-backend-app-api.onrender.com
})

export default instance;