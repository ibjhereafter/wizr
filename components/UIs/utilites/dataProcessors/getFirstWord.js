const getFirstWord = (text) => {
    const firstWord = text.split(' ');
    return firstWord[0];
};

export default getFirstWord;