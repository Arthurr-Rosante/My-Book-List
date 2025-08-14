import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex min-h-screen items-center justify-center text-5xl'>
     <h1 className='bg-primary text-secondary'>Hello, World!</h1>
    </div>
  )
}
