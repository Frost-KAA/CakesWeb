import styles from "../../styles/Poster.module.css"

const Poster = () => (
    <div className={styles.poster}>
        <div className={styles.box}>
            <h1 className={styles.title}>Тортомастер</h1>
            <h2 className={styles.text}>Лучшие торты на заказ</h2>
        </div>
    </div>  
);

export default Poster;

