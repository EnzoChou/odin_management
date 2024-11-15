import React, { createContext, SetStateAction, Dispatch } from 'react';

type menuManager = {
    menu: menu_meal[],
    setMenu: Dispatch<SetStateAction<menu_meal[]>>
};

export const MenuContext = createContext<menuManager>({
    menu: [],
    setMenu: () => []
});