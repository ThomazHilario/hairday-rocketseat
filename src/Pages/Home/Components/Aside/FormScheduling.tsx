import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, CalendarInput, FieldInput } from "@/Components/Form"
import { Button } from "@/Components"
import { SchedulingHours } from "./SchedulingHours"
import { dateTime } from "@/Utils"

import { useAppointmentsContext } from "../../Context"

const DEFAULT_VALUES = {
    date: new Date(),
}

const formShedulingSchema = z.object({
    date: z.date(),
    hour: z.number().min(1, 'Selecione um horário!'),
    customer: z.string().min(1, 'Preencha o campo com o nome do cliente!')
})

type FormSchedulingProps = z.infer<typeof formShedulingSchema>

export const FormSheduling = () => {

    const form = useForm<FormSchedulingProps>({ 
        resolver: zodResolver(formShedulingSchema),
        defaultValues: DEFAULT_VALUES 
    })

    const { handleSetAppointments } = useAppointmentsContext()

    const handleOnSubmit = (data:FormSchedulingProps) => {
        const { date, hour, customer } = data

        handleSetAppointments({
                id: crypto.randomUUID(),
                date: dateTime(date, hour!),
                client: customer
        })

        form.reset({
            customer: '',
            date: new Date(),
            hour: 0,
        })
    }

    return (
        <Form form={form} onSubmit={handleOnSubmit} >
            <CalendarInput label="Data" name="date" id="dateinput" />
            
            <SchedulingHours />

            <FieldInput 
                id="customerField" 
                label="Cliente"
                name="customer" 
            />

            <Button variant="primary" size="md">
                Agendar
            </Button>
        </Form>
    )
}