const getRandomInt = (min, max) => {
    min = min < max ? min : max;
    max = min > max ? min : max;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateId = () => {
    return getRandomInt(100000000, 999999999);
};