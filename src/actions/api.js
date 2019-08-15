import { STORECHATDATA, UPDATECHATDATA } from "../constants";

export const storeData = (data) => ({
    type: STORECHATDATA,
    payload: data
})

export const updateStore = (data) => ({
    type: UPDATECHATDATA,
    payload: data
})