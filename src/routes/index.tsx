import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

export const Route = createFileRoute('/')({
  loader: () => getMessage(),
  component: Home,
})

const getMessage = createServerFn().handler(() => {
  return `Running in ${navigator.userAgent}`
})

function Home() {
  const message = Route.useLoaderData()

  return (
    <div className="p-2">
      <h3>{message}</h3>
    </div>
  )
}
