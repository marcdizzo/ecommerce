import axios from "axios"

const instance = axios.create({
    baseURL: "https://ecommerce-backend-app-api.onrender.com",
    // http://localhost:5000
})

export default instance;