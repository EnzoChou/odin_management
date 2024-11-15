import React, { createContext, SetStateAction, Dispatch } from 'react';

type userManager = {
    user: user,
    setUser: Dispatch<SetStateAction<user>>
};

export const UserContext = createContext<userManager>({
    user: {
        _id: 'abc',
        signed: false,
        role: 'guest'
    },
    setUser: () => {}
});