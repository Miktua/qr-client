import s from './glitch.module.scss'


const NewCanvas = ({win}) => {
  

    const winSize = win <10000 ? 110 : win <100000 ? 90 : win <1000000 ? 80 : 60


    return (

        <div style={{fontSize:winSize+'px'}} className={s.glitch}>
            {win}
            <span>{win}</span>
            <span>{win}</span>
        </div>
    
    );
}



export default NewCanvas


