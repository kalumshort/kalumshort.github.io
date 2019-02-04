export const setCats = cats => {
    return{ 
        type: 'setCats',
        cats: cats,
    };
}

export function setSelectedCat(value) {
    return {
        type: 'setSelectedCat',
        cat: value
    };
}