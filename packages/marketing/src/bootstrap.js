import React  from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App'

// Mount function
const mount  = (el) => {
    const history = createMemoryHistory();

    ReactDOM.render(
        <App history={history}/>,
        el
    );
}

// If we are in dev and isolation
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

// export for container to use
export { mount };