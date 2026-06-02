import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, PropsWithChildren } from "react"

const TextVariants = cva('', {
    variants: {
        variant: {
            default: 'text-white',
            primary: 'text-gray-300'
        },
        size: {
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg'
        }
    },
    defaultVariants: {
        size: 'sm'
    }
})

type TextProps = PropsWithChildren<ComponentProps<'p'>> & VariantProps<typeof TextVariants>

export const Text = ({ children, className, size, variant = "default", ...props }: TextProps) => (
    <p className={TextVariants({ className, variant, size })} {...props}>
        {children}
    </p>
)