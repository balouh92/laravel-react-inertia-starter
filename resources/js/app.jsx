import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import AppLayout from "./Layouts/AppLayout.jsx";

createInertiaApp({
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        )
        page.default.layout ??= (page) => <AppLayout>{page}</AppLayout>
        return page;
    },
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        delay: 250,
        color:
            '#4B5563',
        includeCSS:
            true,
        showSpinner:
            false,
    }
    ,
})
