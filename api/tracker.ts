import { api } from "@/api";

export const trackerAPI = {
    sendEvent(event: EventsEnum) {
        return api.get(`API?action=send_event&event=${event}`).then(res => res.data).catch(console.error)
    },
}

export enum EventsEnum {
    vichyEnterRoom = 'vichy_room_in',
    lrpEnterRoom = 'lrp_room_in',
    ceraveEnterRoom = 'cerave_room_in',
    scEnterRoom = 'sc_room_in',
    confEnterRoom = 'conf_hall_in',
}