import { Button, Card, CardContent, CardHeader, Text, Title, TrashIcon } from "@/Components"
import type { Appointment } from "@/Services";
import { getHours } from "date-fns";
import type { ComponentType, SVGProps } from "react";
import { useAppointmentsContext } from "../../Context";

type AppointmentsCardProps = {
    title: string;
    time: string;
    appointments: Appointment[],
    Icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const AppointmentsCard = ({
    title,
    time,
    appointments,
    Icon
}: AppointmentsCardProps) => {

    const { handleDeleteAppointment } = useAppointmentsContext()

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Icon className="text-yellow-dark size-5" />
                    <Title className="font-normal! text-gray-300" as="h3" size="lg">{title}</Title>
                </div>

                <Text variant="primary">{time}</Text>
            </CardHeader>

            <CardContent>
                {appointments.length > 0 ? (
                    <div className="flex flex-col gap-2">
                        {appointments.map((appointment, index) => (
                            <div key={`${index}-${appointment.client}`} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Text variant="primary" className="text-gray-200! text-lg!">{getHours(appointment.date).toString().padStart(2, '0')}:00</Text>
                                    <Text variant="primary" className="text-lg!">{appointment.client}</Text>
                                </div>

                                <Button onClick={() => handleDeleteAppointment(appointment.id)}>
                                    <TrashIcon className="text-yellow-dark size-4"/>
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : <Text variant="primary">Nenhum agendamento para este período</Text>}
            </CardContent>
        </Card>
    )
}