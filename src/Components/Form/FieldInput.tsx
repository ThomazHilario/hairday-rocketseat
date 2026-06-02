import { Controller, useFormContext, type FieldPath, type FieldValues } from "react-hook-form"
import { UserSquareIcon } from "../Icons";

type FieldInputProps<TFieldValues extends FieldValues> = {
    name: FieldPath<TFieldValues>;
    id: string;
    label: string;
    placeholder?: string
}

export const FieldInput = <TFieldValues extends FieldValues>({
    name,
    id,
    label,
    placeholder
}: FieldInputProps<TFieldValues>) => {
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
                    <div className="flex gap-5 items-center p-2.5 rounded-md border border-gray-500">

                        <UserSquareIcon className="text-yellow size-4" />

                        <input 
                            id={id}
                            className="outline-none border-none text-gray-200 w-full"
                            placeholder={placeholder || 'Digite aqui'}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value} 
                        /> 
                    </div>                 
                )}      
            />
        </label>
    )
}