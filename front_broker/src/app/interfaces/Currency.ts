export interface Currency {
    code:string, 
    name:string,
    icon:string,
    country:string
}

export let CURRENCIES:Currency[] = [
    {code:"COP", name:"Peso Colombiano", icon: "COP.png", country: "Colombia"},
    {code:"USD", name:"Dolares", icon: "USD.png", country: "USA"},
    {code:"EUR", name:"Euros", icon: "EUR.png", country: "Europa"},
];