import styles from "../../styles/Heading.module.css"

const Title = ({title}) => (
    <div className={styles.maintitle}>
        <h3>{title}</h3>
    </div>
);

export default Title;