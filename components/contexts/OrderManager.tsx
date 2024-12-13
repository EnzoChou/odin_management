import React, { createContext, SetStateAction, Dispatch } from 'react';

export const OrderContext = createContext<orderManager>({
    orders: [],
    setOrders: () => []
});