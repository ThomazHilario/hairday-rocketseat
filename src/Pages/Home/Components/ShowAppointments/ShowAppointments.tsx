import { useState } from "react"

import { SunHorizonIcon, Text, Title } from "@/Components"
import { Calendar } from "@/Components/UI"
import { useAppointmentsContext } from "../../Context"
import { AppointmentsCard } from "../AppointmentsCard/AppointmentsCard"
import { format, isEqual, isWithinInterval, setHours } from "date-fns"

const START_AND_END_HOUR_FOR_APPOINTMENTS = {
    morning: {
        start: 8,
        end: 12
    },
    afternoon: {
        start: 13,
        end: 18
    },
    evening: {
        start: 19,
        end: 21
    }
}

export const ShowAppointments = () => {

    const [date, setDate] = useState<Date | null>(new Date())

    const { appointments } = useAppointmentsContext()

    const formatAppointmentsForDay = appointments.filter((appointment) => isEqual(format(appointment.date, 'MM/dd/yyyy'), format(date as Date, 'MM/dd/yyyy')))

    const morningAppointments = formatAppointmentsForDay.filter((appointment) => {
        const isDate = isWithinInterval(appointment.date, {
            start: setHours(date as Date, START_AND_END_HOUR_FOR_APPOINTMENTS.morning.start),
            end: setHours(date as Date, START_AND_END_HOUR_FOR_APPOINTMENTS.morning.end),
        })

        if(isDate) return appointment
    })

    const afternoonAppointments = formatAppointmentsForDay.filter((appointment) => {
        const isDate = isWithinInterval(appointment.date, {
            start: setHours(date as Date, START_AND_END_HOUR_FOR_APPOINTMENTS.afternoon.start),
            end: setHours(date as Date, START_AND_END_HOUR_FOR_APPOINTMENTS.afternoon.end),
        })

        if(isDate) return appointment
    })

    const eveningAppointments = formatAppointmentsForDay.filter((appointment) => {
        const isDate = isWithinInterval(appointment.date, {
            start: setHours(date as Date, START_AND_END_HOUR_FOR_APPOINTMENTS.evening.start),
            end: setHours(date as Date, START_AND_END_HOUR_FOR_APPOINTMENTS.evening.end),
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