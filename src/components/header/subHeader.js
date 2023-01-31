import React from 'react'
import styles from '../../styles/header.module.sass'

const SubHeader = ({text, center}) => {
  return (
    <div className={styles.subHeader} style={{textAlign:center?'center':''}}>{text}</div>
  )
}

export default SubHeader