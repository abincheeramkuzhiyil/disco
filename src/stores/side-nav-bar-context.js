import React, { createContext, useState } from 'react';

const SideNavBarContext = createContext({
    isNavBarOpen: false,
    toggleDrawer: (value) => { },
});

export function SideNavBarContextProvider(props) {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    function toggleDrawerHandler(value) {
        setIsNavBarOpen(value);
    }

    const context = {
        isNavBarOpen,
        toggleDrawer: toggleDrawerHandler,
    };

    return (
        <SideNavBarContext.Provider value={context}>
            {props.children}
        </SideNavBarContext.Provider>
    );
}

export default SideNavBarContext;
