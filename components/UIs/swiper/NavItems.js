import styles from '../css/swiper/SwiperNav.module.css';
import React, { Fragment, useContext } from 'react';
import useGetSwiperContext from './hooks/useGetSwiperContext';

import getFirstWord from '../utilites/dataProcessors/getFirstWord';

const NavItems = () => {
    const SwiperContext = useGetSwiperContext();
    const context = useContext(SwiperContext);
    const items = context.images.map((item) => {
        return (
            <Fragment key={item.id}>
                <section className={styles.navWrapper} onClick={() => context.setCurrentSlide(item.id - 1)}>
                    <div className={`${styles.navImageWrapper} ${context.currentSlide === (item.id - 1) ? `${styles.activeMenu}` : null}`}>
                        <img src={item.thumbnailUrl} alt={item.title} width={40} height={20}/>
                    </div>
                    <div className={styles.navTitle}>{getFirstWord(item.title)}</div>
                </section>
            </Fragment>
        )
    });

    return (
        <Fragment>
            <nav className={styles.navItemsWrapper}>{items}</nav>
        </Fragment>
    );
};

export default NavItems;
