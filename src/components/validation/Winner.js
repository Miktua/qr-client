import axios from "axios";
import { useEffect, useRef, useState } from "react"
import WinAnimation from "./Animation";
import styles from '../../styles/winner.module.sass'
import CardPage from "./card";
import InputMask from 'react-input-mask';
import Textfit from 'react-textfit'
import Header from "../header";
import SubHeader from "../header/subHeader";
import Gap from "../layout/gap";
const ip = process.env.REACT_APP_IP;

const WinnerPage = ({win, code}) => {


    const [formOpen, setFormOpen] = useState(true)
    const [animationModal, setAnimModal] = useState(true)
    const [registret, setRegistret] = useState(false)
    const [totalSumm, setTotalSumm] = useState(false)
    const [pazzleCounter, setPazzleCounter] = useState(0)
    const [formData, setFormData] = useState({
      firstname: "",
      email: "",
      lastname: "",
      phone: "",
      code: code,
    });
    useEffect(()=>{
        setFormData({...formData,code: code})
    },[code])


    const checkInputs = (e) => {
        e.preventDefault()
        if(formData.phone.split('').some(el=>el==='_')){
          alert('Заполните поле телефона правильно')
        } else {
          setFormOpen(false)
        }
    }
         //user info handlers
    const submitUserInfo = (e) => {
          e.preventDefault();
          const phone = formData.phone.replace(/\D/g,'')
          const newData = {...formData, phone: phone}
          NewUser(newData).then((res) => {
            if(res.status){
              setTotalSumm(res.msg.totalSum)
              setPazzleCounter(res.msg.count)
              setRegistret(res.status);
            }
          })
        };

        const userHandler = (e) => {
            setFormData({...formData, [e.target.name]: e.target.value})
        };
        

        
    return (
      <div className={styles.winnerPage}>

          {animationModal ? 
          <WinAnimation win={win} closeAnimation={()=>setAnimModal(false)} />
          : (
        
          formOpen ? 
            <form
              onSubmit={checkInputs}
              style={{ display: "flex", flexDirection: "column" }}
            >   
                <Header text='МОИ ДАННЫЕ' />
                <SubHeader text='Заполните форму для получения выигрыша' />
                <Gap height={64} />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder='e-mail'
                  defaultValue={formData.email}
                  onChange={userHandler}
                />
                <input
                  required
                  type="text"
                  name="firstname"
                  placeholder='Имя'
                  defaultValue={formData.firstname}
                  onChange={userHandler}
                />
                <input
                  required
                  type="text"
                  name="lastname"
                  placeholder='Фамилия'
                  defaultValue={formData.lastname}
                  onChange={userHandler}
                />

              <InputMask mask="+7 (999)-999-99-99" required alwaysShowMask={false} value={formData.phone} onChange={userHandler}>
                {(inputProps) => 
                <input {...inputProps} 
                required
                  disableUnderline 
                  type='text'
                      inputmode="numeric"
                      name="phone"
                      placeholder='Телефон'
                      autoCapitalize='none'
                      autoComplete='none'
                  />}
              </InputMask>
              <Gap height={48} />
              <button>СОХРАНИТЬ</button>
              <p>После активации кода из инструкции есть только одна неделя, чтобы заполнить данные и получить приз</p>
              <p>Поспешите!</p>
            </form>
        : registret?
            <CardPage win={win} code={code} totalSum={totalSumm} counter={pazzleCounter} />
        :
            <div className={styles.checkInputs}>
              <Header text='МОИ ДАННЫЕ' />
              <SubHeader text='Проверьте ваши данные еще раз:' />
              <Gap height={64} />
              <div className={styles.check}>{formData.email}</div>
              <div className={styles.check}>{formData.firstname}</div>
              <div className={styles.check}>{formData.lastname}</div>
              <div className={styles.check}>{formData.phone}</div>
              <Gap height={20} />
              <button onClick={submitUserInfo} className={styles.submit}>ОТПРАВИТЬ</button>
              <button onClick={()=>setFormOpen(true)} className={styles.change}>ИЗМЕНИТЬ</button>
            </div>
        )}

     
      </div>
    );
}



export default WinnerPage







//reg new user
const NewUser = async (formData) => {
  try {

    const res = await axios.put(ip + `codes/claim`, formData);
    const data = {
      msg: res.data,
      status: true
    }
    return data;
    
  } catch (err) {
    const res = {
      msg: err.response.data.err,
      status: false,
    };
    alert(res.msg)
    return res;
  }
};