import axios from "axios";

const http = axios.create({
	baseURL: "http://localhost:3000",
});

http.interceptors.response.use(response => {
	return response.data;
});

export default http as any;
