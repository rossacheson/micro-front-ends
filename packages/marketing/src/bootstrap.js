import React  from 'react';
import ReactDOM from 'react-dom';

// Mount function
const mount  = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
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