export const SortByDetail = (sortBy) => [{
    fieldLabel:"High to low", 
    fieldForLabel:"highToLow", 
    fieldName:"SORT_BY", 
    fieldType:"radio", 
    fieldValue:"HIGH_TO_LOW", 
    fieldFilter: sortBy,
    fieldLabelClassName:"text-white",
}, {
    fieldLabel:"Low to high", 
    fieldForLabel:"lowToHigh", 
    fieldName:"SORT_BY", 
    fieldType:"radio", 
    fieldValue:"LOW_TO_HIGH", 
    fieldFilter: sortBy,
    fieldLabelClassName:"text-white",
}]