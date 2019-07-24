import React , {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class  BurgerIngredient extends Component {
  render(){
    let ingredient = null;
    
      switch(this.props.type){
        case('bread-bottom'):
          ingredient = <div className= {classes.BreadBottom}></div>;
          break;
        
        case('bread-top'):
        ingredient = (
        <div className= {classes.BreadTop}>
          <div className= {classes.Seeds1}></div>
          <div className= {classes.Seeds2}></div>
        </div>
        );
        break;
    
        case('meat'):
        ingredient = <div className= {classes.Meat}></div>;
        break;
    
        case('cheese'):
        ingredient = <div className= {classes.Cheese}></div>;
        break;
    
        case('salad'):
        ingredient = <div className= {classes.Salad}></div>;
        break;
    
        case('bacon'):
        ingredient = <div className= {classes.Bacon}></div>;
        break;
    
        default: 
        ingredient = null;
    
        
        
      }

    return ingredient;
    
  }

  
};


 // PropTypes is an Object and hence starts with capital letter. It is imported from prop-types package. type (which is used in case statement) is a property which is expected as a property ( from passed prop object). The type should be a string. The flower brackets are because BurgerIngredient is an class/object and wer are dealing with class where curly brackets are used.
BurgerIngredient.propTypes={
  type:PropTypes.string.isRequired
};
export default BurgerIngredient;