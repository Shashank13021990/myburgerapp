import React,{Component} from 'react'; // importing React object from react package
import Auxillary1 from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer:true
  }

  sideDrawerClosedHandler = ()=>
  {
    this.setState({showSideDrawer:false});
  }

  sideDrawerToggleHandler = () =>
  {
    this.setState((prevState)=>{
      return ({showSideDrawer: !prevState.showSideDrawer});
    });
  }

  render(){
    return (
      <Auxillary1>
        <Toolbar drawerToggleClicked ={this.sideDrawerToggleHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this. props.children} 
        </main>
      </Auxillary1>
    );
  }
} 

export default Layout;