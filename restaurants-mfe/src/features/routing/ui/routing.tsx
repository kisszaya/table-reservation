import { type FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { type IRoutes } from 'features/routing'

interface Props {
  routes: IRoutes<string>
}

export const Routing: FC<Props> = ({ routes }) => {
    const defaultPath: string | undefined = Object.values(routes).find(
        (route) => route?.default
    )?.path

    return (
        <Routes>
            {Object.values(routes).map((route) => (
                <Route key={route.path} element={route.element} path={route.path} />
            ))}
            {defaultPath && (
                <Route path="*" element={<Navigate to={defaultPath} />} />
            )}
        </Routes>
    )
}
