import React, { createContext, SetStateAction, Dispatch } from 'react';

type orderManager = {
    orders: order[],
    setOrders: Dispatch<SetStateAction<order[]>>
};

export const OrderContext = createContext<orderManager>({
    orders: [],
    setOrders: () => []
});