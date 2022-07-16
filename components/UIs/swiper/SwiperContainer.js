import styles from '../css/swiper/SwiperContainer.module.css';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import MyButton from '../buttons/MyButton';
import ChevronLeft from '../svgs/ChevronLeft';
import ChevronRight from '../svgs/ChevronRight';
import SwiperList from './SwiperList';
import SwiperNav from './SwiperNav';

import useGetSwiperImages from './hooks/useGetSwiperImages';
import useGetSwiperContext from './hooks/useGetSwiperContext';

import changeFillColor from '../utilites/svgs/functions/changeFillColor';
import getNextSlide from '../utilites/functions/getNextSlide';
import getPreviousSlide from '../utilites/functions/getPreviousSlide';
import { startGetImages } from './httpRequests/startGetImages';

const SwiperContainer = () => {
    useGetSwiperImages(startGetImages);
    const SwiperContext = useGetSwiperContext();

    const [ fill, setFill ] = useState('currentColor');
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = useSelector((state) => state?.swiperImages?.images);
    if (images.length === 0) return null;

    const providerValue = { currentSlide, setCurrentSlide, length: images.length, images };

    return (
        <Fragment>
            <Head>
                <title>WiZR-Task</title>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <main>
                <div className={styles.nextButton} onClick={() => getNextSlide(currentSlide, setCurrentSlide, images?.length)} onMouseEnter={() => changeFillColor(setFill, 'white')} onMouseLeave={() => changeFillColor(setFill, 'currentColor')}>
                    <MyButton><ChevronRight fill={fill}/></MyButton>
                </div>

                <div className={styles.previousButton} onClick={() => getPreviousSlide(currentSlide, setCurrentSlide, images?.length)} onMouseEnter={() => changeFillColor(setFill, 'white')} onMouseLeave={() => changeFillColor(setFill, 'currentColor')}>
                    <MyButton><ChevronLeft fill={fill}/></MyButton>
                </div>


                <h1 className={styles.header}>
                    <div>Master WiZR Modules</div>
                </h1>

                <SwiperContext.Provider value={providerValue} >
                    <SwiperNav />
                    <section className={styles.swiperListWrapper}>
                        <SwiperList />
                    </section>
                </SwiperContext.Provider>
            </main>
        </Fragment>
    );
};

export default SwiperContainer;
