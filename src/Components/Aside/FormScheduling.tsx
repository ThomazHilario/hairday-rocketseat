import { useForm } from "react-hook-form"
import { Form } from "../Form"
import { CalendarInput } from "../Form/CalendarInput"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

type FormShedulingProps = {
    handleOnSubmit: () => void
}

const DEFAULT_VALUES = {
    date: new Date(),
    hour: ''
}

const formShedulingSchema = z.object({
    date: z.date(),
    hour: z.string()
})

type FormSchedulingProps = z.infer<typeof formShedulingSchema>

export const FormSheduling = ({ handleOnSubmit }: FormShedulingProps) => {

    const form = useForm<FormSchedulingProps>({ 
        resolver: zodResolver(formShedulingSchema),
        defaultValues: DEFAULT_VALUES 
    })

    return (
        <Form form={form} onSubmit={handleOnSubmit} >
            <CalendarInput label="Data" name="date" id="dateinput" />

            <button type="submit">dsds</button>
        </Form>
    )
}