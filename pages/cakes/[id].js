import Head from "next/head";
import CakeInfo from "../../components/cakes/CakeInfo";


export const getServerSideProps = async(context) =>{
  const {id} = context.params;
  const response = await fetch(`https://lerakrweb.pythonanywhere.com/api/cakes/${id}`)
  const data = await response.json()

  if (!data){
    return{
      notFound: true
    }
  }

  return{
    props: {
      cake: data
    }
  }
}

const CakePage = ({cake})  => (
    <div>
      <Head>
        <title>Информацию о торте</title>
        <meta name="Cake" content="Cake" />
        <link rel="icon" href="/logo.pvg" />
      </Head>

      <CakeInfo cake={cake} />
    </div>
);

export default CakePage;