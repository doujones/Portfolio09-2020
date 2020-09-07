import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import { makeStyles } from '@material-ui/core/styles'
import './App.css';

const useStyles = makeStyles({})

export default function App() {
  const classes = useStyles() 
  return (
    <div className={classes.container}>
     <Switch>
       <Route exact from= "/" render = {props => <Home {...props}/> }/>
       <Route exact path= "/" render = {props => <Contact {...props}/> }/>
       <Route exact path= "/" render = {props => <About {...props}/> }/>
     </Switch>
    </div>
  );
}

