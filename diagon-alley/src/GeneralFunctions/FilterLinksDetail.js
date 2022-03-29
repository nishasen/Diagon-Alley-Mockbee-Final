import Gryffindor from '../Assets/HouseLogos/Gryffindor.png';
import Hufflepuff from '../Assets/HouseLogos/Hufflepuff.png';
import Ravenclaw from '../Assets/HouseLogos/Ravenclaw.png';
import Slytherin from '../Assets/HouseLogos/Slytherin.png';

export const FilterHouseLinks = [
    {
        image: Gryffindor,
        labelName: "Gryffindor",
        linkPath: `/product-listing`
    }, {
        image: Hufflepuff,
        labelName: "Hufflepuff",
        linkPath: `/product-listing`
    }, {
        image: Ravenclaw, 
        labelName: "Ravenclaw",
        linkPath: `/product-listing`
    }, {
        image: Slytherin, 
        labelName: "Slytherin",
        linkPath: `/product-listing`
    }
]

export const FilterCategoryLinks = [
    {
        text: "W",
        avatarColor: "avatar-primary",
        labelName: "Women",
        linkPath: `/product-listing`
    }, {
        text: "M",
        avatarColor: "avatar-secondary",
        labelName: "Men",
        linkPath: `/product-listing`
    }, {
        text: "G",
        avatarColor: "avatar-primary",
        labelName: "Girl",
        linkPath: `/product-listing`
    }, {
        text: "B",
        avatarColor: "avatar-secondary",
        labelName: "Boy",
        linkPath: `/product-listing`
    }
]