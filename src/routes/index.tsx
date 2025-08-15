import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='my-10 container max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold'>My Book List</h1>
    </div>
  )
}
