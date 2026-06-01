import DatePicker, { type DatePickerProps } from "react-datepicker";
import { CustomInputCalendar } from "./CustomInputCalendar";

type CalendarProps = DatePickerProps

export const Calendar = ({ customInput, ...props }: CalendarProps) => (
    <DatePicker
        customInput={<CustomInputCalendar className="text-start flex items-center gap-5 p-2.5 rounded-md border border-gray-500 cursor-pointer" />}
        {...props}
    />
)