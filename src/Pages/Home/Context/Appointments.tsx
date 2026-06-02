import type { Appointment } from "@/Services";
import { useAppoimentsStore } from "@/Services/appointments/appoimentsStore";
import { createContext, useContext, useState, type ReactNode } from "react";

type AppointmentsContextType = {
    appointments: Appointment[];  
    handleSetAppointments: (appoiment: Appointment) => void;
    handleDeleteAppointment: (id: string) => void;
}

type AppointmentsProps = {
    children: ReactNode
}

const AppointmentsContext = createContext<AppointmentsContextType | null>(null)

export const Appointments = ({ children }: AppointmentsProps) => {

    const [appointments, setAppointments] = useState(useAppoimentsStore.getState().appoiments)

    const handleSetAppointments = (appoiment: Appointment) => {
        const changedAppointments = [...appointments, appoiment]

        setAppointments(changedAppointments)
        useAppoimentsStore.getState().setAppoiments(changedAppointments)
    }

    const handleDeleteAppointment = (id: string) => {
        const changedAppointments = appointments.filter(appoiment => appoiment.id !== id)

        setAppointments(changedAppointments)
        useAppoimentsStore.getState().setAppoiments(changedAppointments)
    }

    return (
        <AppointmentsContext.Provider value={{
            appointments,
            handleSetAppointments,
            handleDeleteAppointment
            
        }}>
            {children}
        </AppointmentsContext.Provider>
    )
}


export const useAppointmentsContext = () => {
    const context = useContext(AppointmentsContext)

    if(!context) {
        throw new Error('useAppointmentsContext must be used within an AppointmentsProvider')
    }

    return context
}