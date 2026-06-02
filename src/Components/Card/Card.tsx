import { cn } from "@/Utils"
import type { ComponentProps, PropsWithChildren } from "react"

type CardProps = PropsWithChildren<ComponentProps<'div'>>

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div
            className={cn('min-h-28 border border-gray-600 rounded-md', className)}
            data-slot="card"
            {...props}
        >
            {children}
        </div>
    )
}