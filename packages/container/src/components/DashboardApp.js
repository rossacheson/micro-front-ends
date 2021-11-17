import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

// simple component to mount the marketing remote app
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />
};