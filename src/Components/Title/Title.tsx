import { cva, type VariantProps } from "class-variance-authority"
import { createElement, type PropsWithChildren, type ComponentProps } from "react"

const TitleVariants = cva('text-gray-100 font-semibold', {
    variants: {
        size: {
            xl: 'text-2xl'
        },
    },
    defaultVariants: {
        size: 'xl'
    }
})

type TagsTitle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TitleProps = PropsWithChildren & ComponentProps<TagsTitle> & VariantProps<typeof TitleVariants> & {
    as: TagsTitle,
}

export const Title = ({ children, className, size, as }: TitleProps) => (
    createElement(
        as,
        {
            className: TitleVariants({ size, className })
        },
        children
    )
)