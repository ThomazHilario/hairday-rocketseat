import { useController, useFormContext } from "react-hook-form";

import { Button, Title } from "@/Components";
import type { Appointment } from "@/Services";
import { cn, dateTime } from "@/Utils";

import { agendamento } from "../../config"

import { useAppointmentsContext } from "../../Context";

export const SchedulingHours = () => {
    const { control } = useFormContext()

   const { appointments } = useAppointmentsContext()

    const { field } = useController({
        control,
        name: 'hour'
    })

    const { field: dateField } = useController({
        control,
        name: 'date'
    })

    const handleIsDisabled = (hour: number) => {
        return appointments.some((appointment: Appointment) => appointment.date === dateTime(dateField.value, hour))
    }

    const handleOnChangeHour = (hour: number) => field.onChange(hour)
    
    return (
        <section className="flex flex-col gap-2 mb-2 text-gray-200 font-semibold">
            <Title className="text-gray-200" as="h4" size="lg">Horários</Title>

            <article className="space-y-2">
                {agendamento.map((scheduling, index) => (
                    <div className="flex flex-col gap-1" key={`${index}-${scheduling.title}`}>
                        <label className="font-normal">{scheduling.title}</label>

                        <div className="flex gap-2 flex-wrap items-center">
                            {scheduling.horarios.map((hour, index) => (
                                <Button 
                                    key={`${index}-${hour}`} 
                                    className={cn(field.value === hour && 'border-yellow! text-yellow!')}
                                    disabled={handleIsDisabled(hour)}
                                    onClick={() => handleOnChangeHour(hour)}
                                    type="button" 
                                    variant="secondary"
                                >
                                    {`${hour.toString().padStart(2, '0')}:00`}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}