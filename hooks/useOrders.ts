import { useEffect, useState } from "react";
import React from 'react';

export const useRetrieveOrders = (refreshing: boolean, ordersManager: orderManager) => {
    // 
    // const [checkboxes, setCheckBoxes] = useState<Checkbox[]>([]);

    const [refreshed, setRefreshed] = useState(false);

    useEffect(() => {
        if (refreshing) {
            apis.orderRetrieve()
                .then((res: order[]) => {
                    ordersManager['setOrders'](res);
                })
                .catch((error: unknown) => {

                });
        }
    }, []);
    return [refreshed, useRetrieveOrders];
};