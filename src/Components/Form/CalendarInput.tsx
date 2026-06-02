import { Controller, useFormContext, type FieldPath, type FieldValues } from "react-hook-form"


import "react-datepicker/dist/react-datepicker.css";

import { Calendar } from "../UI";

type CalendarInputProps<TFieldValues extends FieldValues> = {
    name: FieldPath<TFieldValues>;
    id: string;
    label: string;
}

export const CalendarInput = <TFieldValues extends FieldValues>({
    name,
    id,
    label,
}: CalendarInputProps<TFieldValues>) => {
    const { control } = useFormContext<TFieldValues>()

    return (
        <label className="flex flex-col" htmlFor={id}>

            <span className="mb-2 text-gray-200 font-semibold">
                {label}
            </span>

            <Controller 
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Calendar 
                        id={id}
                        dateFormat='dd/MM/yyyy'
                        className="text-gray-200 w-full outline-none"
                        wrapperClassName="flex-1"
                        onChange={onChange} 
                        onBlur={onBlur}
                        selected={value}
                    />                    
                )}      
            />
        </label>
    )
}