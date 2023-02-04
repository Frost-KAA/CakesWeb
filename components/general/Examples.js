import styles from "../../styles/Examples.module.css"

const Examples = () => {

    const data = [
        {id:1, path:"/assets/111.jpg"},
        {id:2, path:"/assets/113.jpg"},
        {id:3, path:"/assets/114.jpg"}
    ]

    return (
    <div className={styles.outer}>
        <div className={styles.flex}>
            {data.map(({id, path}) => (
                <div className ={styles.cup} key={id}>
                    <img src={path} height="300" alt="logo" />
                </div>
            ))}
        </div>
    </div>
)
};

export default Examples;



