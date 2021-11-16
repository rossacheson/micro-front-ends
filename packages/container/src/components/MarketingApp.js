import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// simple component to mount the marketing remote app
export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(
            ref.current,
            {
                onNavigate: ({ pathname: nextPathname }) => {
                    const { pathname } = history.location;

                    if (pathname !== nextPathname) {
                        history.push(nextPathname);
                    }
                }
            });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
};