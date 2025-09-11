import axios from "axios";
import { useQuery } from "@tanstack/react-query";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export function useInitialize() {
    return useQuery({
        queryKey: ["initialize"],
        queryFn: () => axios.get("/misc/initialize"),
    });
}
