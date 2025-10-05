import React from 'react'

import { Profile } from './segments'

import styles from './dashboard.module.css'

export const AdminInfo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.adminInfo} ${styles.item}`}>
                <Profile />
            </div>
            <div className={`${styles.chart} ${styles.item}`}>
            Wykres
            </div>
            <div className={`${styles.item2} ${styles.item}`}>
            Wykres ilości zgloszen
            </div>
            <div className={`${styles.item3} ${styles.item}`}>
            wolne mieszkania
            </div>
            <div className={`${styles.item3} ${styles.item}`}>
                Powiadomienia od użytkownika
            </div>
        </div>
    )
}