import React, {Component} from 'react';
import logo from '../logo.svg';
import burger from '../burger.svg';
import {connect} from 'react-redux';
import Breadcrumbs from './Breadcrumbs';
import { setActiveVertical, setActiveCategory } from '../actions'

import '../App.css';

class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuOpen: false,
      menuClasses: ''
    }
  }

  animateMenu = () => {
    if(!this.state.menuOpen){
      this.setState({ menuClasses: 'show slideIn' });
    } else {
      this.setState({ menuClasses: 'show slideOut' });
      setTimeout(() => {
        this.setState({ menuClasses: '' });
      }, 500);
    }
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div>
        <div className="mobile_header">
          <img src={logo} className="logo" alt="logo"/>
          <img src={burger} className="burger_menu" onClick={() => this.animateMenu()}/>
        </div>
      <div className={`menu ${this.state.menuClasses}`}>
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




