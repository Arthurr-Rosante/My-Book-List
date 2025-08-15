import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'

export const Route = createFileRoute('/(auth)/signup')({
  component: RouteComponent,
})

const SignupFormSchema = z.object({
    email: z.string().email({message: 'Email inválido'}).nonempty({message: 'Email é obrigatório'}),
    password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {message: 'Senha deve conter pelo menos 8 caracteres, incluindo letras e números'}).nonempty({message: 'Senha é obrigatória'}),
    confirmPassword: z.string().nonempty({message: 'Confirmação de senha é obrigatória'})
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
})

function RouteComponent() {
  return <div>Hello "/(auth)/signup"!</div>
}
