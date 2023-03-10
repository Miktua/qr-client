import { useEffect, useState,  } from "react"
import styles from '../../styles/animation.module.sass'
import { CSSTransition } from 'react-transition-group';
import { useSpring, animated } from '@react-spring/web'
import NewCanvas from "../validation/canvas";
import Header from "../header";
import Gap from "../layout/gap";

const FakeWinAnimation = ({win, closeAnimation}) => {
  

  const prizes = [20,100,500,1000,2000,5000,4000,10000,100000]
  const [prize, setPrize] = useState(0)
  const [next, setNext] = useState(false)
  const [state, toggle] = useState(false)

  

  const setPrizes = () => {
    const random = Math.floor(Math.random() * (prizes.length-1))
    setPrize(prizes[random]) 
  }
  

  const cycle = async () =>{ 
    let count = 0
    const tik = setInterval(()=>{
      if(count<39){
        count++
        setPrizes()
        const canVibrate = navigator.vibrate
        canVibrate && navigator.vibrate(50)
        
      } else {
        setPrize(win)
        setNext(true)
        clearInterval(tik)
      }
    },120)
  }

  useEffect(()=>{
    win!=='' && cycle()
  },[win])


  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 0 : 1,
    config: { duration: 500 },
  })

  const vibration = () => {
    const canVibrate = navigator.vibrate
    canVibrate && navigator.vibrate(1000);
  }

   const winwinEntered = () => {
    toggle(true)
    vibration()
   }
   useEffect(()=>{
      state && vibration()
   },[state])


    return (
      <div className={styles.animation}>
        <Header text={'ВАШ ПРИЗ'} />
        <Gap height={50} />
        <div className={styles.prizeBox}>
          <div className={styles.innerBox}>
            <div className={styles.canvas}>
              <NewCanvas win={prize} delay={0.12} />
            </div>
            {/* <Textfit mode="single" className={styles.prize} max={120} >
              {prize}
            </Textfit> */}
            <h3>рублей</h3>
          </div>
        </div>
        <Gap height={64} />
        <button>???</button>

      <CSSTransition
        in={next}
        timeout={500}
        classNames={{
          enter: styles.winwinEnter,
          enterActive: styles.winwinEnterActive,
          exit: styles.winwinExit,
          exitActive: styles.winwinExitActive,
        }}
        unmountOnExit
        onEntered={() => winwinEntered()}
        // onExited={() => setNext(true)}
      >
      <div className={styles.winwinModal}>
        <animated.div style={{
            rotateZ: x.to({
              range: [0, 0.10, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [0, -5 , 5, -5, 5, -5, 5, -5, 0],
            }),
            
          }}>
          
          <Header text={'ВАШ ПРИЗ'} />
          <Gap height={50} />
          <div className={styles.winwinPrizeBox} >
            <div className={styles.winwinInnerBox}>
              <img className={styles.imgRick} src={'/rick.gif'} />
            </div>
          </div>
          <Gap height={50} />
          <button className={styles.rickBotBorder} />
          </animated.div>

          <div className={styles.fakeText}>
            Вы действительно подумали что все так просто? Сначала нужно собрать паззл!
          </div>
          <a className={styles.fakeRools} href='https://millionpuzzle.ru/privacy-policy' target='_blank'>
            Ознакомиться с Правилами
          </a>
        </div>
      </CSSTransition>



      </div>
    );
}



export default FakeWinAnimation



