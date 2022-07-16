const getPreviousSlide = (currentSlide, setCurrentSlide, length) => {
    const slide = currentSlide === 0 ? length - 1 : currentSlide - 1;
    return setCurrentSlide(slide);
};

export default getPreviousSlide;