import Head from "next/head";
import Heading from "../components/general/Heading";
// import styles from "../styles/DeliveryPage.module.css"
import Text from "../components/general/Text";
import Title from "../components/general/Title";

const DeliveryPage = ()  => {

    return (
        <div>
          <Head>
            <title>Список услуг</title>
            <meta name="Services" content="Services" />
            <link rel="icon" href="/logo.svg" />
          </Head>
  
          <main>
            <Heading title="Доставка" />
            <Title title="Доставка готовых тортов" />
            <Text key="1" text="Мы доставляем заказы 7 дней в неделю с 10:00 до 18:00 часов — по тел. 8 914 767 53 76" />
            <Text key="2" text="Заказы оформленные до 16:00 часов доставляются в тот же день." />
            <Text key="3" text="Бесплатная доставка при заказе свыше 1 000р, если меньше, то 200р."/>
            <Title title="Самовывоз готовых тортов" />
            <Text key="4" text="Самостоятельно забрать заказ можно по адресу ул. Серышева, 82." />
            <Text key="5" text="При самовывозе возможны любые способы оплаты." />
            <Title title="Курьерская доставка" />
            <Text key="6" text="Доставка заказов курьером осуществляется ежедневно с 10:00 до 18:00 часов." />
            <Text key="7" text="Минимальная стоимость заказа составляет 300 руб. Бесплатная доставка по Хабаровску действует при заказе от 2 000 р. Доставка в пригород платная и согласовывается отдельно при подтверждении заказа." />
            <Text key="8" text="Заказы, оформленные до 16:00, доставляются в тот же день. Заказы оформленные после 16:00 доставляются на следующий рабочий день. Оформляйте заказы заранее за 1-2 дня до торжества, чтобы мы успели привезти свежайшие торты вовремя." />
            <br></br><br></br>
          </main>
        </div>
    );
  };
  
  export default DeliveryPage;