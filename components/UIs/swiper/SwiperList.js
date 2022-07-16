import styles from '../css/swiper/SwiperList.module.css';
import React, { Fragment, useState, useContext } from 'react';
import { useSelector } from 'react-redux';

import useGetSwiperContext from './hooks/useGetSwiperContext';
import useSwipe from './hooks/useSwipe';

import handleTouchStart from '../utilites/functions/handleTouchStart';

const SwiperList = () => {
    const imageData = useSelector((state) => state?.swiperImages);
    const [touchPosition, setTouchPosition] = useState(null);
    const SwiperContext = useGetSwiperContext();
    const context = useContext(SwiperContext);
    const handleTouchMove = useSwipe();

    const { images } = imageData;
    if (images.length === 0) return null;

    const touchMoveDataObject = {
        currentSlide: context.currentSlide,
        setCurrentSlide: context.setCurrentSlide,
        previousTouchedPosition: touchPosition,
        length: images.length
    }

    const slides = images.map((image, index) => {
        return (
            <Fragment key={image.id}>
                <section className={index === context.currentSlide ? styles.activeSlide : styles.slide}>
                    {
                        index === context.currentSlide ?
                            (<img
                                onTouchStart={(event) => handleTouchStart(event, setTouchPosition)}
                                onTouchMove={(event) => handleTouchMove({...touchMoveDataObject, event})}
                                className={styles.swiperImage} src={image.url} alt={image.title}
                            />)

                            : null
                    }
                </section>
            </Fragment>
        )
    });


    return <Fragment>{slides}</Fragment>;
};

export default SwiperList;
