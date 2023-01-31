import React from 'react'
import styles from '../../styles/errors.module.sass'
import Header from '../header'
import SubHeader from '../header/subHeader'
import Gap from '../layout/gap'
const ErrorScreen = ({title, subtitle, button, onClick}) => {

    return(
        <div className={styles.notFound}>
            <Header text={'Ошибка'} />
            <SubHeader text={'Страницы нет'} />
            <Gap height={70} />
            <div className={styles.error404}>
              <h3>404</h3>
            </div>
            <div className={styles.link}>
                <div className={styles.a}>
                    <a href='https://millionpuzzle.ru/'>ПЕРЕЙТИ НА САЙТ</a>
                </div>
            </div>        
        </div>
    )
}
export default ErrorScreen