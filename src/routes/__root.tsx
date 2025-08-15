import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

import { Header } from '@/components/Header'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({

  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
})
