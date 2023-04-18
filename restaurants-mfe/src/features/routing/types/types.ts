import { type RouteProps } from 'react-router-dom'

export type IRoutes<PATHS extends string> = Record<
PATHS,
RouteProps & { default?: boolean }
>
