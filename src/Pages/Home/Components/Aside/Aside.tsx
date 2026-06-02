import { Text, Title } from '@/Components'
import { FormSheduling } from './FormScheduling'

export const Aside = () => {
    return (
        <aside className="p-20 py-8 space-y-5 bg-gray-700 rounded-xl w-full min-h-full lg:max-w-124.5 grow">
           <article className="space-y-1">
                <Title as="h1">Agende um atendimento</Title>

                <Text variant="primary">Selecione data, horário e informe o nome do cliente para criar o agendamento.</Text>
           </article>

            <FormSheduling />
        </aside>
    )
}