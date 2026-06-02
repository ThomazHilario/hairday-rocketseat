import { useState } from "react"

import { SunHorizonIcon, Text, Title } from "@/Components"
import { Calendar } from "@/Components/UI"
import { useAppointmentsContext } from "../../Context"
import { AppointmentsCard } from "../AppointmentsCard/AppointmentsCard"
import { format, isEqual, isWithinInterval, setHours } from "date-fns"

export const ShowAppointments = () => {

    const [date, setDate] = useState<Date | null>(new Date())

    const { appointments } = useAppointmentsContext()

    const formatAppointmentsForDay = appointments.filter((appointment) => isEqual(format(appointment.date, 'MM/dd/yyyy'), format(date as Date, 'MM/dd/yyyy')))

    const morningAppointments = formatAppointmentsForDay.filter((appointment) => {
        const isDate = isWithinInterval(appointment.date, {
            start: setHours(date as Date, 9),
            end: setHours(date as Date, 12),
        })

        if(isDate) return appointment
    })

    const afternoonAppointments = formatAppointmentsForDay.filter((appointment) => {
        const isDate = isWithinInterval(appointment.date, {
            start: setHours(date as Date, 13),
            end: setHours(date as Date, 18),
        })

        if(isDate) return appointment
    })

    const eveningAppointments = formatAppointmentsForDay.filter((appointment) => {
        const isDate = isWithinInterval(appointment.date, {
            start: setHours(date as Date, 19),
            end: setHours(date as Date, 21),
        })

        if(isDate) return appointment
    })

    return (
        <section className="w-full h-full flex flex-col justify-center gap-4 p-20 py-8">
            <article className="space-y-1 w-full">
                <div className="flex items-center">
                    <Title as="h2">Sua Agenda</Title>

                    <Calendar
                        dateFormat='dd/MM/yyyy'
                        wrapperClassName="block ml-auto"
                        className="text-gray-200 w-full outline-none"
                        onChange={setDate} 
                        selected={date} 
                    />
                </div>

                <Text variant="primary">Consulte os seus cortes de cabelo agendados por dia</Text>
            </article>

            <AppointmentsCard 
                title="Manhã"
                time="09h-12h"
                appointments={morningAppointments}
                Icon={SunHorizonIcon}
            />

            <AppointmentsCard 
                title="Tarde"
                time="13h-18h"
                appointments={afternoonAppointments}
                Icon={SunHorizonIcon}
            />

            <AppointmentsCard 
                title="Noite"
                time="19h-21h"
                appointments={eveningAppointments}
                Icon={SunHorizonIcon}
            />
        </section>
    )
}