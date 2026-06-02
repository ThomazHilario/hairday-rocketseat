import { Aside, ShowAppointments } from './Components'
import { Appointments } from './Context'

export const Home = () => (
    <Appointments>
        <Aside />

        <ShowAppointments />
    </Appointments>
)