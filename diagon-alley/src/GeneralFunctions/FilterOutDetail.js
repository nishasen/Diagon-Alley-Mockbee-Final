export const FilterOutDetail = (onlyInStock, fastDelivery, ratingAbove4, newProduct) =>
        [{
            label:"Exclude out of stock", 
            forLabel:"excludeOutOfStock",
            name:"EXCLUDE_OUT_OF_STOCK",
            type:"checkbox",
            value:"excludeOutOfStock",
            filter: onlyInStock,
            labelClassName:"text-white",
        }, {
            label:"Only show fast delivery",
            forLabel:"showFastDelivery", 
            name:"SHOW_FAST_DELIVERY", 
            type:"checkbox", 
            value:"showFastDelivery", 
            filter: fastDelivery,
            labelClassName:"text-white",
        }, {
            label:"Rating above 4 star", 
            forLabel:"ratingAbove4Star", 
            name:"RATING_ABOVE_4_STAR", 
            type:"checkbox", 
            value:"ratingAbove4Star", 
            filter: ratingAbove4,
            labelClassName:"text-white",
        }, {
            label:"Show new products", 
            forLabel:"showNewProducts", 
            name:"SHOW_NEW_PRODUCT", 
            type:"checkbox", 
            value:"showNewProducts", 
            filter: newProduct,
            labelClassName:"text-white",
        }]