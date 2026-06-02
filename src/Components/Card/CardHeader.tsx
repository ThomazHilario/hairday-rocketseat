import { cn } from "@/Utils"
import type { ComponentProps, PropsWithChildren } from "react"

type CardHeaderProps = PropsWithChildren<ComponentProps<'div'>>

export const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
    return (
        <div
            className={cn('p-4 flex items-center justify-between border-b border-gray-600', className)}
            data-slot="card"
            {...props}
        >
            {children}
        </div>
    )
}