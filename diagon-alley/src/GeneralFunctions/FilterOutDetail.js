export const FilterOutDetail = (onlyInStock, fastDelivery, ratingAbove4, newProduct) =>
        [{
            fieldLabel:"Exclude out of stock", 
            fieldForLabel:"excludeOutOfStock",
            fieldName:"EXCLUDE_OUT_OF_STOCK",
            fieldType:"checkbox",
            fieldValue:"excludeOutOfStock",
            fieldFilter: onlyInStock,
            fieldLabelClassName:"text-white",
        }, {
            fieldLabel:"Only show fast delivery",
            fieldForLabel:"showFastDelivery", 
            fieldName:"SHOW_FAST_DELIVERY", 
            fieldType:"checkbox", 
            fieldValue:"showFastDelivery", 
            fieldFilter: fastDelivery,
            fieldLabelClassName:"text-white",
        }, {
            fieldLabel:"Rating above 4 star", 
            fieldForLabel:"ratingAbove4Star", 
            fieldName:"RATING_ABOVE_4_STAR", 
            fieldType:"checkbox", 
            fieldValue:"ratingAbove4Star", 
            fieldFilter: ratingAbove4,
            fieldLabelClassName:"text-white",
        }, {
            fieldLabel:"Show new products", 
            fieldForLabel:"showNewProducts", 
            fieldName:"SHOW_NEW_PRODUCT", 
            fieldType:"checkbox", 
            fieldValue:"showNewProducts", 
            fieldFilter: newProduct,
            fieldLabelClassName:"text-white",
        }]