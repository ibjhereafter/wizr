import getNextSlide from '../../utilites/functions/getNextSlide';
import getPreviousSlide from '../../utilites/functions/getPreviousSlide';

const useSwipe = () => {
    return handleTouchMove;
};

export default useSwipe;

const handleTouchMove = (objectWithEventAndData) => {
    const { event, currentSlide, setCurrentSlide, length, previousTouchedPosition } = objectWithEventAndData;
    if (!previousTouchedPosition) return null;
    const currentTouch = event.touches[0].clientX;
    const differenceInPosition = previousTouchedPosition - currentTouch;

    if (differenceInPosition > 5) {
        getNextSlide(currentSlide, setCurrentSlide, length);
    }

    if (differenceInPosition < -5) {
        getPreviousSlide(currentSlide, setCurrentSlide, length)
    }
};