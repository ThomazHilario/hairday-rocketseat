import { cn } from "@/Utils";
import type { ComponentProps } from "react";
import { Outlet } from "react-router-dom";

type MainLayoutProps = ComponentProps<'main'>

export const MainLayout = ({ className, ...props }: MainLayoutProps) => (
    <main className={cn('flex bg-gray-800 min-h-screen p-3', className)} {...props}>
        <Outlet />
    </main>
)