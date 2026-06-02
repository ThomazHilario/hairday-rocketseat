import { CalendarIcon, DownArrowIcon } from "@/Components/Icons";
import { forwardRef } from "react";

type CustomInputCalendarProps = {
  className?: string;
  value?: string;
  onClick?: () => void;
};

export const CustomInputCalendar = forwardRef<
  HTMLButtonElement,
  CustomInputCalendarProps
>(({ value, onClick, className }, ref) => ( 
  <button type="button" className={className} onClick={onClick} ref={ref}>
    <CalendarIcon className="text-yellow size-4"/>

    <span className="flex-1">
      {value}
    </span>

    <DownArrowIcon className="text-gray-300 size-4" />
  </button>
));