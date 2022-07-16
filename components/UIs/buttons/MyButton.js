import styles from '../css/buttons/MyButton.module.css';
import React from 'react';

const MyButton = ({ children }) => {
    return (
        <div>
            <button className={styles.button}>{children}</button>
        </div>
    );
};

export default MyButton;
