import { cn } from "@/Utils"
import type { ComponentProps, PropsWithChildren } from "react"

type CardContentProps = PropsWithChildren<ComponentProps<'div'>>

export const CardContent = ({ children, className, ...props }: CardContentProps) => {
    return (
        <div
            className={cn('flex flex-col gap-2 p-4 w-full text-gray-200', className)}
            data-slot="card-content"
            {...props}
        >
            {children}
        </div>
    )
}