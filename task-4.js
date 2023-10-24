function getShippingCost(country) {
    switch (country) {
        case 'China':
            const pricechina = 100;
            return china = `Shipping to ${country} will cost ${pricechina} credits`;
            break;
        case 'Chile':
            const pricechile = 250;
            return chile = `Shipping to ${country} will cost ${pricechile} credits`;
            break;
        case 'Australia':
            const priceaustralia = 170;
            return australia = `Shipping to ${country} will cost ${priceaustralia} credits`;
            break;
        case 'Jamaica':
            const pricejamaica = 120;
            return jamaica = `Shipping to ${country} will cost ${pricejamaica} credits`;
            break;
        default:
            const value = 'Sorry, there is no delivery to your country';
            return value;
    }
    return value;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
