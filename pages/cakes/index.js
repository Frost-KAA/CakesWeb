import Head from "next/head";
import CakeCard from "../../components/cakes/CakeCard";
import Heading from "../../components/general/Heading";
import styles from "../../styles/CakesPage.module.css"

export const getStaticProps = async() =>{
  const response = await fetch('https://lerakrweb.pythonanywhere.com/api/cakes')
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      cakes: data
    }
  }
}


const CakesPage = ({cakes})  => {

  return (
      <div>
        <Head>
          <title>Список тортов</title>
          <meta name="Cakes" content="Cakes" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <main>
          <Heading title="Каталог тортов" />

          <div className={styles.list}>
            {cakes && cakes.map(({id, name, price, upload}) => (
                <CakeCard key={id} id={id} name={name} price={price} upload={upload} />
            ))}
          </div>

        </main>
      </div>
  );
};

export default CakesPage;