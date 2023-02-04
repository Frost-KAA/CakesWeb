import Heading from "../general/Heading"
import styles from "../../styles/CakeInfo.module.css"

const CakeInfo = ({cake}) =>{
    if (!cake){
        return <Heading title="Информация о торте"/>
    }

    return(
        <main>
            <Heading title={cake.name} />
            <div className={styles.general}>
                <div className={styles.box}>
                    <img src={cake.upload} width="450" height="300" alt="cake_img"/>
                </div>
                <div className={styles.desc_box}>
                    <p>{cake.desc}</p>
                    <p><b>{cake.price} рублей</b></p>
                </div>
            </div>
        </main>
    )
}

export default CakeInfo;
