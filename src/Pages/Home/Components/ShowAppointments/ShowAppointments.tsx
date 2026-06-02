import { useState } from "react"

import { Text, Title } from "@/Components"
import { Calendar } from "@/Components/UI"
import { useAppointmentsContext } from "../../Context"

export const ShowAppointments = () => {

    const [date, setDate] = useState<Date | null>(new Date())

    const { appointments } = useAppointmentsContext()

    return (
        <section className="w-full h-full flex justify-center gap-4 p-20 py-8">
            <article className="space-y-1 w-full">
                <div className="flex items-center">
                    <Title as="h2">Sua Agenda</Title>

                    <Calendar
                        wrapperClassName="block ml-auto"
                        className="text-gray-200 w-full outline-none"
                        onChange={setDate} 
                        selected={date} 
                    />
                </div>

                <Text variant="primary">Consulte os seus cortes de cabelo agendados por dia</Text>
            </article>


        </section>
    )
}