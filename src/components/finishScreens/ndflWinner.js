import styles from '../../styles/winner.module.sass'
import Textfit from 'react-textfit'
import Header from '../header';
import SubHeader from '../header/subHeader';
import Gap from '../layout/gap';


const NdflWinner = ({closeTab, counter}) => {




    return (
<>
          <Header text={'ПОЗДРАВЛЯЕМ С ВЫИГРЫШЕМ!'} />
          <SubHeader text={
            <span>Согласно&ensp;
              <a href='https://www.nalog.ru/rn07/news/tax_doc_news/4243491/#:~:text=217%20%D0%9D%D0%9A%20%D0%A0%D0%A4%20%D0%BF%D1%80%D0%B5%D0%B4%D1%83%D1%81%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D0%B2%D0%B0%D0%B5%D1%82%20%D0%BE%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F,%D0%BA%20%D0%B8%D0%B3%D1%80%D0%B0%D0%BC%2C%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%20%D0%BD%D0%B0%20%D1%80%D0%B8%D1%81%D0%BA%D0%B5' 
                target='_blank'>налоговому кодексу</a>
                , для передачи денежного приза нам необходимо составить с Вами договор и уплатить налог.  
            </span>
          } />
            <Gap height={50}/>
            <div className={styles.wellcall}>Мы свяжемся с Вами в будние дни с 10.00 до 19.00 по телефону для составления договора.</div>
            <Gap height={50}/>
          
          <button onClick={closeTab}>ЗАКРЫТЬ</button>
        </>
    );
}



export default NdflWinner





