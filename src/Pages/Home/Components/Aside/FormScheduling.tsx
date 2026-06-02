import { useForm } from "react-hook-form"
import { Form, CalendarInput, FieldInput } from "@/Components/Form"

import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { formatISO } from "date-fns"

const DEFAULT_VALUES = {
    date: new Date(),
    hour: undefined,
    customer: ''
}

const formShedulingSchema = z.object({
    date: z.date(),
    hour: z.undefined() || z.number(),
    customer: z.string()
})

type FormSchedulingProps = z.infer<typeof formShedulingSchema>

export const FormSheduling = () => {

    const form = useForm<FormSchedulingProps>({ 
        resolver: zodResolver(formShedulingSchema),
        defaultValues: DEFAULT_VALUES 
    })

    const handleOnSubmit = (data:FormSchedulingProps) => {
        const { date, hour } = data
        const time = formatISO(new Date(date.getFullYear(), date.getMonth(), date.getDay(), 10).toISOString())
        console.log(time)
    }

    return (
        <Form form={form} onSubmit={handleOnSubmit} >
            <CalendarInput label="Data" name="date" id="dateinput" />

            <FieldInput 
                id="customerField" 
                label="Cliente"
                name="customer" 
            />

            <button className="bg-yellow font-semibold text-gray-900 p-3.5 w-full rounded-md cursor-pointer" type="submit">Agendar</button>
        </Form>
    )
}