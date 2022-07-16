const getNextSlide = (currentSlide, setCurrentSlide, length) => {
    const slide = currentSlide === length - 1 ? 0 : currentSlide + 1;
    return setCurrentSlide(slide);
};

export default getNextSlide;