import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>Community<span className={styles.logoBold}>Core</span></p>
            <div className={styles.login}>
                <button className={styles.button}>Login</button>
                <button className={styles.button}>Register</button>
            </div>
        </header>
    )
}