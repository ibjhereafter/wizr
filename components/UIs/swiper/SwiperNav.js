import styles from '../css/swiper/SwiperNav.module.css';
import React, { Fragment } from 'react';
import Head from 'next/head';

import NavItems from './NavItems';

const SwiperNav = () => {

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <nav className={styles.navContainer}>
                <NavItems />
            </nav>
        </Fragment>

    );
};

export default SwiperNav;
