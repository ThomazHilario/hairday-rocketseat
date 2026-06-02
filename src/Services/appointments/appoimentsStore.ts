import { createStore } from 'zustand'
import { persist } from 'zustand/middleware'

import type { Appointment } from './types';

type AppoimentsStoreAction = (appointment: Appointment[]) => void


type AppoimentsStore = {
    appoiments: Appointment[];
    setAppoiments: AppoimentsStoreAction;
}

export const useAppoimentsStore = createStore<AppoimentsStore>()(
    persist(
        (set) => ({
            appoiments: [],
            setAppoiments: (appoiments) => set({ appoiments })
        }),
        { name: 'appointments' }
    )
)