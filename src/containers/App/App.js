import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import 'antd/lib/date-picker/style/css'; // for css
import ShoppingList from '../ShoppingList';
import Planning from '../Planning';
import Main from '../Main/Main';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAllIngredients, getAllTypes  } from '../../actions/ingredients.actions';
import { getAllRecipes } from '../../actions/recipes.actions';
import { getAllPlans } from '../../actions/plans.actions';
import Login from '../Login';
import SignUp from '../SignUp';
import { getAllMeasures } from '../../actions/measures.actions';

class App extends Component {
  componentDidMount() {
    this.props.getAllRecipes();
    this.props.getAllIngredients();
    this.props.getAllPlans();
    this.props.getAllMeasures();
    this.props.getAllIngredientTypes();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/main" component={Main} />
            <Route path="/planning" component={Planning} />
            <Route path="/list" component={ShoppingList} />
            <Route path="/signup" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  getAllIngredients: PropTypes.func,
  getAllRecipes: PropTypes.func,
  getAllPlans: PropTypes.func
};
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getAllIngredients: () => dispatch(getAllIngredients()),
  getAllRecipes: () => dispatch(getAllRecipes()),
  getAllPlans: () => dispatch(getAllPlans()),
  getAllMeasures: () => dispatch(getAllMeasures()),
  getAllIngredientTypes: () => dispatch(getAllTypes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
