import { createContext } from 'react';

const defaultMenuState = {
    isChecked: false,
    isClosed: true,
    updateMenuState() {}
}

const { Consumer: MenuConsumer, Provider: MenuProvider } = createContext(defaultMenuState);

export {
    MenuConsumer,
    MenuProvider,
    defaultMenuState
}