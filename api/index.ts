import axios from "axios";
import { cabinAPI } from './cabin';
import { trackerAPI } from "./tracker";
import { userAPI } from './user';

const BASE_DOMAIN = ''

export const api = axios.create({
  withCredentials: true,
  baseURL: BASE_DOMAIN,
})

export const API = {
    me: userAPI,
    tracker: trackerAPI,
    cabin: cabinAPI,
}