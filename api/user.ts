import { api } from "@/api";
import { MeResponseType } from "./types";

export const userAPI = {
    whoami() {
        return api.get<MeResponseType>(`API?action=whoami`).then(res => res.data).catch(console.error)
    },
}