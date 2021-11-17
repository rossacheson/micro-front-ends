import { createApp } from 'vue';

import Dashboard from './components/Dashboard';

// Mount function
const mount  = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}

// If we are in dev and isolation
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_dashboard-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

// export for container to use
export { mount };