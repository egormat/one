import { api } from "@/api";
import { ApiResponseType } from "./types";

export const cabinAPI = {
    getBackgroundList() {
        return api.get<GetBackgroudnCabinResponseType>(`/API?action=cabin_background_list`).then(res => res.data).catch(console.error)
    },
    createTask(id: number, image: string, source?: string) {
        const data = new FormData()
        data.append('image', image)
        
        return api.post<CreateCabinTaskResponseType>(
            `/API?action=create_cabin_task&background_id=${id}&source=${source}`,
            data,
            { headers: { "Content-Type": "multipart/form-data" }
        }).then(res => res.data).catch(console.error)
    },
    getResult(taskId: number) {
        return api.get<GetResultResponseType>(`/API?action=cabin_get_result&task_id=${taskId}`).then(res => res.data).catch(console.error)
    },
    getPreview(taskId: number) {
        return api.get<GetResultResponseType>(`/API?action=cabin_get_preview&task_id=${taskId}`).then(res => res.data).catch(console.error)
    }
}

interface GetResultResponseType extends ApiResponseType {
    data_url: string
}

interface CreateCabinTaskResponseType extends ApiResponseType {
    create_cabin_task: {
        dislike_reason: any
        background_name: string
        full_marshall: boolean
        source: string
        dislike: boolean
        http_status_preview: number
        http_status_download: number
        id: number
        user_id: number
        background_id: number
        created: string
        class_version: string
        base_path: any
    }
}

export type CabinBackground = {
    id: number
    name: string
    compatibility: string | null
    enabled: boolean
    sort: number
    image: {
        sort: number
        context_name: string
        owner_id: string
        image_id: string
        mime: string
        propertioes: any
        crops: any
        extension: string
        mime_safe: string
    }
}

interface GetBackgroudnCabinResponseType extends ApiResponseType {
    cabin_background_list: CabinBackground[]
}