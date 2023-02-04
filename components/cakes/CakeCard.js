import Card from 'react-bootstrap/Card';
import styles from "../../styles/CakeCard.module.css"
import Link from 'next/link';

const CakeCard = ({id, name, price, upload}) => (
    <Card key={id} className={styles.general} style={{ width: '18rem' }}>
        
      <Card.Img className={styles.img} variant="top" src={upload} height={250} width={300}/>
      <Card.Body>
        <Link href={`/cakes/${id}`} legacyBehavior>
          <a className={styles.a}><Card.Title className={styles.title}>{name}</Card.Title></a>
        </Link>
        <Card.Text className={styles.price}>{price} рублей</Card.Text>
      </Card.Body>
    </Card>
);

export default CakeCard;