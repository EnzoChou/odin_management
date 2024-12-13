import React, { createContext, SetStateAction, Dispatch } from 'react';

export const MenuContext = createContext<menuManager>({
    menu: [],
    setMenu: () => []
});