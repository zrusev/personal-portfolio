import { createContext } from 'react';

const defaultMenuState = {
    isChecked: false,
    buttonState: 'close',
    updateMenuState() {}
}

const { Consumer: MenuConsumer, Provider: MenuProvider } = createContext(defaultMenuState);

export {
    MenuConsumer,
    MenuProvider,
    defaultMenuState
}