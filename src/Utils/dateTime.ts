import { formatISO } from "date-fns";

export const dateTime = (date: Date, hour: number) => formatISO(
    new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour), { representation: 'complete' }
)