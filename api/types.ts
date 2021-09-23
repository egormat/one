export enum ResultCodesEnum {
    Success = 'ok',
    Error = 'error',
    NotAuthorized = 'auth',
}

export type ApiResponseType<D = {}> = {
    resultCode: ResultCodesEnum
    controller: string
    authorization: any,
    error_info: {
        message: string
        place: string
        trace: string
    }
}

export type UserType = {
    id: number
    loreal_id: number | null
    email: string | null
    name: string | null
    family: string | null
    eldername: string | null
    workplace: string | null
    city: string | null
    speciality: string | null
    profession_id: number | null
    profession_title: string | null
    class_version: string
}

export interface MeResponseType extends ApiResponseType {
    whoami: UserType
}