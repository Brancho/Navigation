import React, {Component} from 'react';
import logo from '../logo.svg';
import {connect} from 'react-redux';
import Breadcrumbs from './Breadcrumbs';
import { setActiveVertical, setActiveCategory } from '../actions'

import '../App.css';

class Navigation extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="menu">
        <img src={logo} className="logo" alt="logo"/>
        <Breadcrumbs />

        {!this.props.active.vertical &&
        <ul className="navigation">
          { this.props.navigation.verticals.map((item, i) => {
            return <li key={i} className="list_item" onClick={() => this.props.setActiveVertical(item)}>{ item.Name }</li>
          }) }
        </ul>
        }

        {this.props.active.vertical &&
        <ul className="navigation">
          { this.props.navigation.categories.map((item, i) => {
            if(this.props.active.vertical.Id === item.Verticals){
              return <li key={i} className={`list_item ${ this.props.active.category && this.props.active.category.Name === item.Name ? 'active_category' : '' }`} onClick={() => this.props.setActiveCategory(item)}>{ item.Name }</li>
            }
          }) }
        </ul>
        }

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
    active: state.active
  }
};
export default connect(mapStateToProps, { setActiveVertical, setActiveCategory })(Navigation);




