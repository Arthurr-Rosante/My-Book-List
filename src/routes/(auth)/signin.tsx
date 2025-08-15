import { createFileRoute } from '@tanstack/react-router'
import {useForm} from '@tanstack/react-form'
import z from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(auth)/signin')({
  component: RouteComponent,
})


const SigninFormSchema = z.object({
    email: z.string().email({message: 'Email inválido'}).nonempty({message: 'Email é obrigatório'}),
    password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W_]{8,}$/
, {message: 'Senha deve conter pelo menos 8 caracteres, incluindo letras e números'}).nonempty({message: 'Senha é obrigatória'})
})

function RouteComponent() {
    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        validators: {
            onChange: SigninFormSchema
        },
        onSubmit: async({value}) => {
            console.log(value)
        }
    });

  return (
    <div className='my-10 container max-w-6xl mx-auto flex flex-col items-center'>
        <form className='flex flex-col space-y-6 items-center justify-start w-xl'
            onSubmit={form.handleSubmit}
        >
            <form.Field
                name='email'
                children={(field) => (
                    <div className='flex flex-col space-y-2 my-6 w-full'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            type='email'
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {<p className='text-red-500'>
                            {field.state.meta.errors[0]?.message}
                            </p>}
                    </div>
                )}
            />
            <form.Field
                name='password'
                children={(field) => (
                    <div className='flex flex-col space-y-2 my-6 w-full'>
                        <Label htmlFor='password'>Senha</Label>
                        <Input
                            type='password'
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {<p className='text-red-500'>
                            {field.state.meta.errors[0]?.message}
                            </p>}
                    </div>
                )}
            />

            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]} children={([canSubmit, isSubmitting]) => (
                <Button type='submit' disabled={!canSubmit || isSubmitting}>
                    {isSubmitting ? 'Entrando...' : 'Entrar'}
                </Button>
            )}/>
        </form>
    </div>
  )
}
