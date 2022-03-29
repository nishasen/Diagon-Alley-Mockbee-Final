export const SortByDetail = (sortBy) => [{
    label:"High to low", 
    forLabel:"highToLow", 
    name:"SORT_BY", 
    type:"radio", 
    value:"HIGH_TO_LOW", 
    filter: sortBy,
    labelClassName:"text-white",
}, {
    label:"Low to high", 
    forLabel:"lowToHigh", 
    name:"SORT_BY", 
    type:"radio", 
    value:"LOW_TO_HIGH", 
    filter: sortBy,
    labelClassName:"text-white",
}]