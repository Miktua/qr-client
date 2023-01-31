import React from 'react'
import styles from '../../styles/errors.module.sass'
import Textfit from 'react-textfit'
import Header from '../header'
import SubHeader from '../header/subHeader'
import Gap from '../layout/gap'
const ErrorScreen = ({title, subtitle, button, onClick}) => {

    return(
        <div className={styles.incorrect}>
               <Header text={title} center />
                <SubHeader text={subtitle} center />
                <Gap height={100} />
                <button onClick={onClick} >{button}</button>
              </div>
    )
}
export default ErrorScreen