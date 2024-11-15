let names = require('../utils/random_names.json');

let keyGenerator = (k?: number): string => '_' + Math.random().toString(36).substring(2, ((k || 1) + 2));

export const order_generator = (n_orders?: number):order[] => {
    let orders: order[] = [];
    n_orders ??= 10;
    let counter = 0;
    while (counter <= n_orders) {
        let s_order =  {
            _id: keyGenerator(9),
            table: '1',
            paid: false,
            name: 'gino',
            created_at: new Date(),
            status: 'in progress',
            food: [],
            drink: []
          };
        counter++;
    }
    return orders;
} 