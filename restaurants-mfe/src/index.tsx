import { createRoot } from 'react-dom/client'

import { App } from './app'
import { ThemeProvider } from './features/theme-provider'

const root = createRoot(document.getElementById('root'))

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
