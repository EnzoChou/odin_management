type orderManager = {
    orders: order[],
    setOrders: Dispatch<SetStateAction<order[]>>
};

type userManager = {
    user: user,
    setUser: Dispatch<SetStateAction<user>>
};

type menuManager = {
    menu: menu_meal[],
    setMenu: Dispatch<SetStateAction<menu_meal[]>>
};