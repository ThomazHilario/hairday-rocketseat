import type { PropsWithChildren } from "react"
import { FormProvider, type FieldValues, type SubmitHandler, type UseFormReturn } from "react-hook-form"


type FormProps<T extends FieldValues> = PropsWithChildren<{
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
}>

export const Form = <T extends FieldValues>({ children, form, onSubmit }: FormProps<T>) => {

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}