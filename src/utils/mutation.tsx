import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useCallUser() {
    return useMutation({
        mutationFn: (data) => axios.post("/callUser", data),
    });
}


export function useVerifyCode() {
    return useMutation({
        mutationFn: (data) => axios.post("/code", data),
    });
}
