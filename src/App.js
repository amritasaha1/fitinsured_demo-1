import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AccessFitnessApp from './components/pages/AccessFitnessApp';
import CheckDiscounts from './components/pages/CheckDiscounts';
import GetBestPolicy from './components/pages/GetBestPolicy';
import FitinsuredDashboard from './components/pages/FitinsuredDashboard';
import GetMedicalDetail from './components/pages/GetMedicalDetail';
import Home from './components/pages/Home';

function App() {
return (
    <>
      <Router>
          <NavBar />
          <Switch >
            <Route path='/' exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/access-fitness-app" component={AccessFitnessApp} />
            <Route path='/check-discounts' component={CheckDiscounts} />
            <Route path="/get-best-policy" component={GetBestPolicy} />
            <Route path="/fitinsured-dashboard" component={FitinsuredDashboard} />
            <Route path="/get-medical-detail" component={GetMedicalDetail}/>
           </Switch >
      </Router>
    </>
  );
}

export default App;
