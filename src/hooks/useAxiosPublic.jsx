import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://faz-tudo-server.vercel.app'
    baseURL: 'https://faz-tudo-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;