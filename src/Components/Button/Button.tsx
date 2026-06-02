import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, PropsWithChildren } from "react"

const ButtonVariants = cva('cursor-pointer transition-colors duration-500 ease-in-out', {
    variants: {
        variant: {
            primary: 'bg-yellow font-semibold text-gray-900 w-full rounded-md',
            secondary: 'bg-gray-600 border border-gray-500 font-normal text-gray-200 h-10 w-19.5 rounded-md'
        },
        size: {
            sm: 'p-2',
            md: 'p-3.5'
        },
        disabled: {
            false: null,
            true: 'opacity-50 pointer-events-none'
        }
    },
    defaultVariants: {
        size: 'sm',
        disabled: false,
    }
})

type ButtonProps = PropsWithChildren<ComponentProps<'button'>> & VariantProps<typeof ButtonVariants>


export const Button = ({ children, variant, className, size, disabled, ...props }: ButtonProps) => (
    <button className={ButtonVariants({ className, variant, size, disabled })} {...props}>
        {children}
    </button>
)