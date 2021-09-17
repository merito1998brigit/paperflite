import React from 'react';
import Header from "./Components/Header";
import Mainview from "./Components/Mainview";
import './App.css';
import { Grid } from "@material-ui/core";
import { Switch,Route,BrowserRouter as Router } from "react-router-dom";

function App() {
  return (<div style={{margin:'0px'}}>
    <Router>
     <Header/>
      <Switch>
        <Route exact path="/" component={Mainview}/>
      </Switch>
    </Router>  
     </div>
  );
}

export default App;
