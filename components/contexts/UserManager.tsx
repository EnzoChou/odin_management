import React, { createContext, SetStateAction, Dispatch } from 'react';

export const UserContext = createContext<userManager>({
    user: {
        _id: 'abc',
        signed: false,
        role: 'guest'
    },
    setUser: () => {}
});