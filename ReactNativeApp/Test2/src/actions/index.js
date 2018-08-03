import {DO_TASK} from './type'

export const doTask = (number) => ({
    type: DO_TASK,
    payload: number
})