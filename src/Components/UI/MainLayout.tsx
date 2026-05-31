import { cn } from "@/Utils";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
    <main className={cn('flex, bg-gray-800 h-screen p-3')}>
        <Outlet />
    </main>
)