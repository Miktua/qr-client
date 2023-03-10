// import logo from './logo.svg';
import './App.css';
import styles from './styles/app.module.sass'
import { createBrowserHistory } from "history";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Validation from './components/validation';
import Layout from './components/layout';
import NotFound from './components/errorScreen/pageNotFound'
import { useEffect } from 'react';
import FakeValidationForm from './components/fakeWinner/FakeValidation';

const  App = () => {
  console.log('p:'+process.env.REACT_APP_IP)
  const history = createBrowserHistory();
  useEffect(()=>{
    
  },[])

  return (
    <Router history={history}>
      <div className={styles.appContainer}>
        <div className={styles.content}>
          <Switch>
              <Route exact path="/validation/:link" component={Validation} />
              <Route exact path="/winner" component={FakeValidationForm} />
              <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
        <div className={styles.layout}>
          <Layout />
        </div>
          
      </div>
    </Router>
  );
}

export default App;
