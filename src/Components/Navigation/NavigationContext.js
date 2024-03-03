import { createContext } from "react";

const navigationArr = [
    {
        id: 1,
        icon: 'img/sprite.svg#product',
        text: 'Product'
    },
    {
        id: 2,
        icon: 'img/sprite.svg#customers',
        text: 'Customers'
    },
    {
        id: 3,
        icon: 'img/sprite.svg#income',
        text: 'Income'
    },
    {
        id: 4,
        icon: 'img/sprite.svg#promote',
        text: 'Promote'
    },
    {
        id: 5,
        icon: 'img/sprite.svg#help',
        text: 'Help'
    }
];

const NavigationContext = createContext(navigationArr);

export default NavigationContext;