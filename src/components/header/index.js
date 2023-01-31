import React from 'react'
import styles from '../../styles/header.module.sass'

const Header = ({text, center}) => {
  return (
    <div>
        <h2 className={styles.header} style={{textAlign:center?'center':''}}>{text}</h2>
        <div className={styles.divider} />
    </div>
    
  )
}

export default Header