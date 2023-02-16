import { DateTime } from "luxon"

const getDate = (date) => DateTime.fromSQL(date)

const getNow = () => DateTime.now()

export const useDateTime = () => ({
    getDate,
    getNow
})