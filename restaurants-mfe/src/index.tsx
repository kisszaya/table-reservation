import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
    // <React.StrictMode>
    <>
        <App/>
    </>
    // </React.StrictMode>
)
