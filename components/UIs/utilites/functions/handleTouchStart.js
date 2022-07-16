const handleTouchStart = (e, setTouchPosition) => {
    const touch = e.touches[0].clientX;
    return setTouchPosition(touch);
};

export default handleTouchStart;