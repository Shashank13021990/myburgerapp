import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux5 from '../../../hoc/Auxillary';


const sideDrawer = (props) =>{
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open){
    attachedClasses= [classes.SideDrawer, classes.Open];
  }
  return (
  <Aux5>
    <Backdrop show={props.open}  clicked = {props.closed}/>
    <div className= {attachedClasses.join(' ')}>
      <div className= {classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavigationItems/>
      </nav>

    </div>
  </Aux5>

  
);
}

export default sideDrawer;